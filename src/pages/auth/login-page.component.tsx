import { Component } from 'react';
import { CardComponent } from '../../components/containers/card/card.component';
import { Column, Container } from './style';

/**
 * Página de Login do sistema
 * @author Luiz Miguel
 * @since 03/2022
 */
export class LoginPageComponent extends Component {

    /**
     * Renderiza os elementos da página
     */
    render(): JSX.Element {
        return(
            <Container>
                <Column>
                    <img src='../../assets/logo/logo.png' alt=''></img>
                    <span>PetMe</span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec aliquam leo. Mauris eleifend, nibh at lacinia porttitor.</p>
                </Column>
                <Column>
                    <CardComponent shadow size='sm'>
                        <h1>Tela de Login será desenvolvida aqui</h1>
                    </CardComponent>
                </Column>
            </Container>
        )
    }
}