import { ReactNode } from 'react';
import { IInputProperties } from '../input-properties.interface';
import { Input } from '../input.component';

/**
 * Component Email-input
 * @author Gustavo Cecato
 * @since 04/2022
 */

export class EmailInputComponent extends Input{

    constructor(props: IInputProperties){
        super(props);
    }

    protected getInput(): ReactNode{
        return(
            <input
                type="email"
                ref={this.input}
                name={this.props.name}
                id={'input-' + this.props.name}
                placeholder={this.props.placeholder}
                alt={this.props.alt}
                readOnly={this.props.readonly}
                onChange={event => this.context.setFields(event, this.field)}
                onKeyUp={() => this.validateInput()}
                defaultValue={this.props.value}/>
        )
    }


}