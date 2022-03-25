import { ReactNode } from 'react';
import { IInputProperties } from '../input-properties.interface';
import { Input } from '../input.component';

/**
 * Componente de Input Password do App
 * @author Luiz Miguel
 * @since 03/2022
 */
export class PasswordInputComponent extends Input {
    constructor(props: IInputProperties) {
        super(props);
    }

    /**
     * Recupera o input, possibilitando sobrescrevê-lo pelas classes herdeiras (extend)
     * 
     * **OBS: Precisa retornar o HTML do input para não quebrar o funcionamento do componente**
     */
    protected getInput(): ReactNode {
        return (
            <input
                type="password"
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
}