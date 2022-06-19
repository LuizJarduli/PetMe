import { Component, createRef, FormEvent } from 'react';
import { CardComponent } from '../../../containers/card/card.component';
import { InputContainer } from '../input.styles';

/**
 * Input de pesquisa do sistema
 * @author Luiz Miguel
 * @since 06/2022
 */
export class SearchInputComponent extends Component<any> {
    constructor(props: any) {
        super(props);
        this.formRef = createRef<HTMLFormElement>();
        this.inputRef = createRef<HTMLInputElement>();
    }

    /** Referencia do formulário */
    private formRef: React.RefObject<HTMLFormElement>;
    /** Referência do Input de texto */
    private inputRef: React.RefObject<HTMLInputElement>

    /**
     * Recupera o valor do input e envia no callback do parent component
     */
    private submitForm(): void {
        const inputValue: string | null = this.inputRef?.current?.value || null;
        this.props?.onSubmit(inputValue);
    }

    /**
     * Renderiza os elementos da página
     */
    render(): JSX.Element {
        return (
            <CardComponent
                size='md'>
                <form
                    action=""
                    ref={this.formRef}>
                        <InputContainer>
                            <input
                                ref={this.inputRef}
                                name={this.props.name}
                                id={'input-' + this.props.name}
                                placeholder={this.props.placeholder}
                                alt={this.props.alt}
                                readOnly={this.props.readonly}
                                onKeyUp={() => this.submitForm()}/>
                        </InputContainer>
                </form>
            </CardComponent>
        )
    }
}