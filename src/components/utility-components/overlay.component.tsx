import { Component, ReactNode } from 'react';
import { Overlay } from './style';

/**
 * Component de overlay do sistema
 * @author Luiz Miguel
 * @since 04/2022
 * @see https://www.w3schools.com/howto/howto_css_overlay.asp
 */
export class OverlayComponent extends Component {
    constructor(props: any) {
        super(props);
    }

    /**
     * Renderiza os elementos da página
     */
    render(): JSX.Element {
        return(
            <Overlay>
                {this.props.children}
            </Overlay>
        )
    }
}