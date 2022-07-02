import { createRef, ReactNode } from 'react';
import { IInputProperties } from '../input-properties.interface';
import { Input } from '../input.component';
import InputMask, { ReactInputMask } from 'react-input-mask';

/**
 * Component phone-input
 * @author Gustavo Cecato
 * @since 06/2022
 */

export class PhoneInputComponent extends Input{
    
    constructor(props: IInputProperties) {
        super(props);
        this.input = createRef<ReactInputMask>();
    }

    protected getInput(): ReactNode {
        return(
            <InputMask 
                {...this.props}
                ref={this.input}
                onChange={event => this.context.setFields(event, this.field)}
                onKeyUp={() => this.validateInput()}
                mask={'(99)99999-9999'}/>
        )
    }

}