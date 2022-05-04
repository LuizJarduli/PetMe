import { Component } from 'react';
import { OverlayComponent } from './overlay.component';
import { LoadingWrapper, Spinner } from './style';

/**
 * Componente de loading spinner do sistema
 * @author Luiz Miguel
 * @since 04/2022
 */
export class LoadingComponent extends Component {
    constructor(props: Component) {
        super(props);
    }

    /**
     * Renderiza os elementos da página
     */
    render(): JSX.Element {
        return (
            <OverlayComponent>
                <LoadingWrapper>
                    <Spinner></Spinner>
                </LoadingWrapper>
            </OverlayComponent>
        )
    }
}