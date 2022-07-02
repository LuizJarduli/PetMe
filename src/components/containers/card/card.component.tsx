import { Component, ReactNode } from 'react';
import { ICardProperties } from './card-properties.interface';
import { Container } from './style';

/**
 * Componente de Cards (Containers) do App
 * @author Luiz Miguel
 * @since 03/2022
 */
export class CardComponent extends Component<ICardProperties> {
    constructor(props: ICardProperties) {
        super(props);
    }

    /**
     * Renderiza o elemento na página
     */
    render(): ReactNode {
        const { border, shadow, padding, size } = this.props || {};
        return (
            <Container
                border={border || false}
                shadow={shadow || false}
                padding={padding || 'md'}
                size={size || 'sm'}
                className='container-fluid'>
                    {this.props.children}
            </Container>
        );
    }
}