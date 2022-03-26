import { Component, Context, createContext, createRef, FormEvent, ReactNode, RefObject } from 'react';
import { IFormContext } from './form-properties.interface';
import { validations } from './form-validations';

/**
 * Armazena e compartilha dados dos inputs para os demais componentes
 */
export const FormComponentContext: Context<{ submitData: any; errors: any; }> = createContext({
	submitData: {},
	errors: {}
});

/**
 * Componente de Formulários do App
 * @author Luiz Miguel
 * @since 03/2022
 * @see https://javascript.plainenglish.io/a-better-way-to-handle-forms-and-input-with-react-e01500ac73c
 */
export class FormComponent extends Component {

	constructor(props: any) {
		super(props);
		this.addField.bind(this);
		this.setFields.bind(this);
		this.form = createRef<HTMLFormElement>();
	}

	private form: RefObject<HTMLFormElement>;

    state: { submitData: { [key: string]: any }, errors: any} = {
        submitData: {},
        errors: {},
    }

    /**
     * Seta valores para o context API
     * @param event emissão de dados do componente
     * @param param1 any
     */
    public setFields = (event: FormEvent, input: any) => {
		event && event.persist();
		const { submitData } = this.state;
		
		const field = submitData[input.name as string];
		this.addField({
			field: {
				...field,
				value: event ? (event.currentTarget as any).value : input.value
			}
		});
    };

	/**
	 * Adiciona dados dos inputs presentes no form ao estado do componente
	 */
	public addField({ field }: any): Promise<void> {
		const { name } = field;
		
		field = {
			value: '',
			...field
		};

		return new Promise<void>((resolve, reject) => {
			if (name) {
				this.setState((prevState: { submitData: { [key: string]: any }; errors: any; }) => {
					return {
						...prevState,
						submitData: {
							...prevState.submitData,
							[name]: field
						}
					};
				}, () => {
					resolve();
				});
			} else {
				reject(`Coloque um name 'name' field to the input: ${field}`);
			}
		})

	}

	/**
	 * Valida os campos do formulários
	 * @param id id do campo no formulário
	 */
	public validateFields = (fieldName: string): Promise<void> => {
		let error = '';
 
		const {
			value: fieldValue,
			validate,
			name,
			customRules = {}
		} = this.state.submitData[fieldName];
		const rules = validate ? validate.split('|') : '';
	
		return new Promise<void>(resolve => {
			if (rules.length) {
				for (const rule in rules) {
					const ruleName = rules[rule];
					const validation = validations[ruleName] || customRules[ruleName];
					const isRuleSatisfied: boolean = ruleName !== 'required' && !fieldValue ? true : validation.rule().test(fieldValue.toString());
	
					if (!isRuleSatisfied) {
						error = validation.formatter.apply(null, [name || fieldName]);
					}
			
					if (error !== '') {
						break;
					}
				}
			
				this.setState((prevState: { submitData: { [key: string]: any }; errors: any; }) => ({
					...prevState,
					errors: {
						...prevState.errors,
						[fieldName]: error,
					}
				}), () => {
					resolve();
				});
			} else {
				resolve();
			}
		})
	}

	/**
	 * Faz a submissão dos dados do formulário, valida mais uma vez todos os valores atuais
	 * dele (método `validateFields`) antes de bindar seu valor para o componente pai
	 * @param event Evento de submit do formulário
	 */
	private submitForm(event: FormEvent<HTMLFormElement>): void {
		event.preventDefault();
		Object.keys(this.state.submitData)
			?.forEach((key) => {
				this.validateFields(key).then(() => {
					this.forceUpdate();
				});
			});
	}

    /**
     * Renderiza os elementos da página
     */
    render(): ReactNode {
        const { submitData, errors } = this.state;

        const formContext: IFormContext = {
            submitData,
            errors,
			addField: (data: any) => this.addField(data),
            setFields: this.setFields,
			validateFields: this.validateFields,
        };

        return(
            <form 
				action=""
				ref={this.form}
				onSubmit={(event) => this.submitForm(event)}>
                <FormComponentContext.Provider value={formContext}>
                    {this.props.children}
                </FormComponentContext.Provider>
            </form>
        );
    }
}
