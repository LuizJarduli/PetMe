import { Component } from 'react';
import { Navigate } from 'react-router-dom';
import { ButtonComponent } from '../../components/buttons/button.component';
import { CardComponent } from '../../components/containers/card/card.component';
import { FormComponent } from '../../components/form/form.component';
import { PasswordInputComponent } from '../../components/form/inputs/password-input/password-input.component';
import { TextInputComponent } from '../../components/form/inputs/text-input/text-input.component';
import { AuthApi } from '../../core/api/auth/auth.api';
import { ILoginProperties, ILoginResponse } from '../../core/api/auth/auth.api.properties';
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

    state: { user: null, error: null, redirect: null};

    /**
     * Realiza o Login do usuário ao dar submit no form
     *
     * @param formData dados de Login
     */
    private handleLoginFormSubmit(formData: any): void {
        console.log('dados de submit', formData); // TODO: criar rotina de login
        AuthApi.login({ username: formData.userName.value, password: formData.userPassword.value})
            .then((response: ILoginResponse) => console.log('sucesso', response))
            .catch((error) => console.log('erro', error));
    }

    /**
     * Trata os redirecionamentos da página com a rota informada
     * @param route rota a ser redirecionada
     */
    private handleNavigate(route: string): void {
        this.setState({ redirect: route});
    }

    /**
     * Chamado imediatamente após a montagem do componente.
     */
    componentDidMount(): void {
        document.addEventListener('onFormSubmit', (event) => {
            event.stopPropagation();
            this.handleLoginFormSubmit((event as CustomEvent).detail)
        });
    }

    /**
     * Chamado imediatamente após o componente ser destruído
     */
    componentWillUnmount(): void {
        document.removeEventListener('onFormSubmit', (event) => this.handleLoginFormSubmit((event as CustomEvent).detail));
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
                        <FormComponent
                            onFormSubmit={(event) => this.handleLoginFormSubmit(event.detail)}>
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
                                color='secondary'
                                onClick={() => this.handleNavigate('/cadastro')}/>
                        { this.state?.redirect && <Navigate to={this.state.redirect} />}
                    </CardComponent>
                </Column>
            </Container>
        )
    }
}