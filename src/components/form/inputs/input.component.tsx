import { Component, Context, createRef, ReactNode, RefObject } from 'react';
import { FormComponentContext } from '../form.component';
import { IInputProperties } from './input-properties.interface';
import { InputContainer, InputErrorMessage } from './input.styles';

/**
 * Class Base para criação de inputs do sistema
 * @author Luiz Miguel
 * @since 03/2022
 */
export class Input extends Component<IInputProperties> {
    constructor(props: IInputProperties) {
        super(props);
        this.input = createRef<HTMLInputElement>();
    }

    static contextType?: Context<any> | undefined = FormComponentContext;

    /** Referência do Input na página*/
    protected input: RefObject<HTMLInputElement>;

    /** Objeto com as propriedades do Input */
    protected field: any;

    /** Valor do input */
    protected value: string;

    /** Mensagem de erro do input */
    protected fieldError: string;

    /**
     * Trata as emissões dos inputs
     * @param event 
     */
    protected validateInput(): void {
        if (this.input?.current?.value) {
            this.context.validateFields(this.props.name);
        }
    }

    /**
     * Recupera o input, possibilitando sobrescrevê-lo pelas classes herdeiras (extend)
     * 
     * **OBS: Precisa retornar o HTML do input para não quebrar o funcionamento do componente**
     */
    protected getInput(): ReactNode {
        return(
            <input
                ref={this.input}
                name={this.props.name}
                id={'input-' + this.props.name}
                placeholder={this.props.placeholder}
                alt={this.props.alt}
                readOnly={this.props.readonly}
                onChange={event => this.context.setFields(event, this.field)}
                onKeyUp={() => this.validateInput()}/>
        )
    }


    /**
     * Chamado imediatamente após a montagem do componente.
     */
    componentDidMount(): void {
        this.context.addField({
            field: this.props,
            value: ''
        })
            .then(() => {
                // Inicializa os atributos
                this.field = this.context.submitData[this.props.name] || {};
                this.fieldError = this.context.errors[this.props.name] || '';
                this.value = this.field?.value;
            })
            .catch((error: string) => {
                throw new Error(error);
            });
    }

    /**
     * Chamado imediatamente após o componente ser destruído
     */
    componentWillUnmount(): void { }

    /**
     * Renderiza os elementos da página
     */
    render(): ReactNode {
        return (
            <InputContainer>
                {this.getInput()}
                {this.fieldError ? (<InputErrorMessage>{this.fieldError}</InputErrorMessage>) : null }
            </InputContainer>
        );
    }
}