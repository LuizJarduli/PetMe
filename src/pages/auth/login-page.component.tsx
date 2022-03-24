import { Component } from 'react';
import { ButtonComponent } from '../../components/buttons/button.component';
import { CardComponent } from '../../components/containers/card/card.component';
import { FormComponent } from '../../components/form/form.component';
import { PasswordInputComponent } from '../../components/form/inputs/password-input/password-input.component';
import { TextInputComponent } from '../../components/form/inputs/text-input/text-input.component';
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
                    <span>Miclaa</span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec aliquam leo. Mauris eleifend, nibh at lacinia porttitor.</p>
                </Column>
                <Column>
                    <CardComponent shadow size='sm'>
                        <FormComponent>
                            <TextInputComponent 
                                name='userName'
                                placeholder='Usuário'
                                required />
                            <PasswordInputComponent 
                                name='userPassword'
                                placeholder='Senha'
                                required />
                            <ButtonComponent 
                                name='confirmButton'
                                label='Entrar'
                                class='primary'/>
                        </FormComponent>
                    </CardComponent>
                </Column>
            </Container>
        )
    }
}