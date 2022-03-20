import { Component, ReactNode } from 'react';
import { IInputProperties } from './input-properties.interface';

/**
 * Class Base para criação de inputs do sistema
 * @author Luiz Miguel
 * @since 03/2022
 */
export class Input extends Component<IInputProperties> {
    constructor(props: IInputProperties) {
        super(props);
    }

    render(): ReactNode {
        return(
            <InputContainer>
                
            </InputContainer>
        )
    }
}