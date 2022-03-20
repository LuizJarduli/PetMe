import { Component, Context, createContext, FormEvent, ReactNode } from 'react';
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

    state: { submitData: { [key: string]: any }, errors: any} = {
        submitData: {},
        errors: {},
    }

    /**
     * Seta valores para o context API
     * @param event emissão de dados do componente
     * @param param1 any
     */
    public setFields = (event: FormEvent, { id, value }: { id: string | number; value: string | number}) => {
		event && event.persist();
	
		const { submitData } = this.state;
		const field = submitData[id];
	
		this.addField({
			field: {
				...field,
				value: event ? (event.currentTarget as any).value : value
			}
		});
    };

	/**
	 * Adiciona dados dos inputs presentes no form ao estado do componente
	 */
	addField({ field }: any) {
		const { id } = field;

		field = {
			value: '',
			...field
		};

		if (id) {
			this.setState((prevState: { submitData: { [key: string]: any }; errors: any; }) => {
				return {
					...prevState,
					submitData: {
						...prevState.submitData,
						[id]: field
					}
				};
			});
			return;
		}

		throw new Error(`please add 'id' field to the input: ${field}`);
	}

	/**
	 * Valida os campos do formulários
	 * @param id id do campo no formulário
	 */
	public validateFields = (id: string | number) => {
		let error = '';
		
		const {
			value: fieldValue,
			validate,
			displayName,
			customRules = {}
		} = this.state.submitData[id];
		const rules = validate ? validate.split('|') : '';
	
		if (rules.length) {
			for (const rule in rules) {
				const ruleName = rules[rule];
				const validation = validations[ruleName] || customRules[ruleName];
				const isRuleSatisfied: boolean = ruleName !== 'required' && !fieldValue ? true : validation.rule().test(fieldValue.toString());

				if (!isRuleSatisfied) {
					error = validation.formatter.apply(null, [displayName || id]);
				}
		
				if (error !== '') {
					break;
				}
			}
		
			this.setState((prevState: { submitData: { [key: string]: any }; errors: any; }) => ({
				...prevState,
				errors: {
					...prevState.errors,
					[id]: error,
				}
			}));
		}
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
            <form action="">
                <FormComponentContext.Provider value={formContext}>
                    {this.props.children}
                </FormComponentContext.Provider>
            </form>
        );
    }
}
