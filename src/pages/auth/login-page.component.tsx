import { Component } from 'react';
import { Navigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { ButtonComponent } from '../../components/buttons/button.component';
import { CardComponent } from '../../components/containers/card/card.component';
import { FormComponent } from '../../components/form/form.component';
import { PasswordInputComponent } from '../../components/form/inputs/password-input/password-input.component';
import { TextInputComponent } from '../../components/form/inputs/text-input/text-input.component';
import { LoadingComponent } from '../../components/utility-components/loading.component';
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

    state: { user: null, error: null, redirect: null, loading: false};

    /**
     * Realiza o Login do usuário ao dar submit no form
     *
     * @param formData dados de Login
     */
    private handleLoginFormSubmit(formData: any): void {
        this.setState({ loading: true });
        AuthApi.login({ username: formData.userName.value, password: formData.userPassword.value})
            .then((response: ILoginResponse) => toast.success('Login Efetuado com Sucesso. Bem vindo', { autoClose: 3000}))
            .catch((error) => toast.error(error, { autoClose: 3000 }))
            .finally(() => this.setState({ loading: false}))
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
                { this.state?.loading && (<LoadingComponent></LoadingComponent>) }
                <Column>
                    <img src='../../assets/logo/logo.png' alt=''></img>
                    <span>Maskota</span>
                    <p></p>
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
                            <ForgetPasswordLabel onClick={() => this.handleNavigate('/recuperar')}>
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