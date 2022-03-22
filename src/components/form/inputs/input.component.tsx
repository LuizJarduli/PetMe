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
        this.input = createRef<IInputProperties>();
    }

    static contextType?: Context<any> | undefined = FormComponentContext;

    /** Referência do Input na página*/
    private input: any;

    /** Objeto com as propriedades do Input */
    private field: any;

    /** Valor do input */
    private value: string;

    /** Mensagem de erro do input */
    private fieldError: string;

    /**
     * Trata as emissões dos inputs
     * @param event 
     */
    private validateInput(): void {
        console.log(this.input.current);
        if (this.input?.current?.value) {
            console.log(this.input?.current?.value)
            this.context.validateField(this.props.name);
        }
        console.log('ei');
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
                onChange={event => { this.context.setFields(event, this.field)} }
                onKeyPress={() => this.validateInput}/>
        )
    }


    /**
     * Chamado imediatamente após a montagem do componente.
     */
    componentDidMount(): void {
        // Inicializa os atributos
        this.field = this.context.submitData[this.props.name as string] || {};
        console.log(this.context);
        this.fieldError = this.context.errors[this.props.name as string] || '';
        this.value = this.field?.value;

        this.context.addField({
            field: this.props,
            value: ''
        });
    }

    /**
     * Renderiza os elementos da página
     */
    render(): ReactNode {
        return(
            <InputContainer>
                {this.getInput()}
                <InputErrorMessage>{this.fieldError}</InputErrorMessage>
            </InputContainer>
        )
    }
}