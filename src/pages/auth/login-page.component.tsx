import { Component, Context } from 'react';
import { ButtonComponent } from '../../components/buttons/button.component';
import { CardComponent } from '../../components/containers/card/card.component';
import { FormComponent, FormComponentContext } from '../../components/form/form.component';
import { PasswordInputComponent } from '../../components/form/inputs/password-input/password-input.component';
import { TextInputComponent } from '../../components/form/inputs/text-input/text-input.component';
import { Column, Container, ForgetPasswordLabel, ForgetPasswordOption } from './style';

/**
 * Página de Login do sistema
 * @author Luiz Miguel
 * @since 03/2022
 */
export class LoginPageComponent extends Component {

    constructor(props: typeof Component) {
        super(props);
    }

    static contextType?: Context<any> | undefined = FormComponentContext;

    private handleLoginFormSubmit(formData: any): void {
        console.log(formData); // TODO: criar rotina de login
    }

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
                                validate='required' />
                            <PasswordInputComponent 
                                name='userPassword'
                                placeholder='Senha'
                                validate='required' />
                            <ButtonComponent 
                                name='confirmButton'
                                label='Entrar'
                                color='primary'/>
                        </FormComponent>
                        <ForgetPasswordOption>
                            <ForgetPasswordLabel>
                                Esqueceu a senha?
                            </ForgetPasswordLabel>
                        </ForgetPasswordOption>
                        <ButtonComponent 
                                name='createAccountButton'
                                label='Criar Conta'
                                color='secondary'/>
                    </CardComponent>
                </Column>
            </Container>
        )
    }
}