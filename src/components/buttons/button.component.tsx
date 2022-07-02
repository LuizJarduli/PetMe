import { Component } from 'react';
import { IButtonProperties } from './button-properties.interface';
import { StyledButton } from './style';

export class ButtonComponent extends Component<IButtonProperties> {
    constructor(props: IButtonProperties) {
        super(props);
    }

    /**
     * Renderiza os Elementos da página
     */
    render(): JSX.Element {
        return (
            <StyledButton
                {...this.props}
                label={this.props.label}
                name={this.props.name}
                color={this.props.color}>
                    {this.props.label}
            </StyledButton>
        );
    }
}