import { Component } from 'react';
import { CardComponent } from '../../../components/containers/card/card.component';
import { FormComponent } from '../../../components/form/form.component';
import { ButtonComponent } from '../../../components/buttons/button.component';
import { EmailInputComponent } from '../../../components/form/inputs/email-input/email-input.component';
import { Container, Separator, Box, Column } from './style';
import { CPFInputComponent } from '../../../components/form/inputs/cpf-input/cpf-input.component';
import { TextInputComponent } from '../../../components/form/inputs/text-input/text-input.component';
import { PasswordInputComponent } from '../../../components/form/inputs/password-input/password-input.component';
import { userApi } from '../../../core/api/cadastro/cadastro.api';
import { toast } from 'react-toastify';
import { Navigate } from 'react-router-dom';
import { LoadingComponent } from '../../../components/utility-components/loading.component';

/**
 * Pagina Recuperar Senha
 * @author Gustavo Cecato
 * @since 04/2022
 */
export class RecuperarSenhaComponent extends Component{
    constructor(props: Component) {
        super(props);
        this.state = { loading: false };
    }

    state: { redirect?: string, loading: boolean };

    /**
     * Efetua a recuperação de senha do usuário
     * @param formData 
     */
    private handleRecuperarFormSubmit(formData: any): void {
        this.setState({ loading: true });
        console.log(formData);
        userApi.renewPassword({
            username: formData.userName.value,
            cpf: formData.userCpf.value,
            email: formData.userEmail.value,
            novaSenha: formData.userNewPwd.value,
        })
            .then(() => toast.success('Nova senha atualizada com sucesso!'))
            .catch((error) => toast.error(error))
            .finally(() => {
                this.setState({ loading: false });
                this.handleRedirect('/');
            })
    }

    /**
     * Trata os redirecionamentos da página
     * @param path destino informado
     */
    private handleRedirect(path: string): void {
        this.setState({ redirect: path });
    }

    /**
     * Chamado imediatamente após a montagem do componente.
     */
    componentDidMount(): void {
        document.addEventListener('onFormSubmit', (event) => {
            event.stopPropagation();
            this.handleRecuperarFormSubmit((event as CustomEvent).detail)
        });
    }

    /**
     * Chamado imediatamente após o componente ser destruído
     */
    componentWillUnmount(): void {
        document.removeEventListener('onFormSubmit', (event) => this.handleRecuperarFormSubmit(event));
        setTimeout(() => window.location.reload(),  500);
    }

    /**
     * Renderiza os elementos da página
     */
    render(): JSX.Element {
        return(
            <Container>
                { this.state?.loading && (<LoadingComponent></LoadingComponent>) }
                { this.state?.redirect && <Navigate to={this.state.redirect} />}
                <Column>
                    <img src="../../assets/logo/logo.png" alt="Logo"></img>
                    <span>Maskota</span>
                </Column>
                <Column>
                    <CardComponent shadow size='sm'>
                        <h2>Recuperar Senha</h2>
                        <FormComponent onFormSubmit={(event) => this.handleRecuperarFormSubmit(event.detail)}>
                            <TextInputComponent 
                                name='userName'
                                placeholder='Nome de usuário'
                                validate='required'/>
                            <EmailInputComponent
                                name='userEmail'
                                placeholder='Email'
                                validate='required'/>
                            <CPFInputComponent
                                name='userCpf'
                                placeholder='CPF'
                                validate='required'/>
                            <PasswordInputComponent
                                name='userNewPwd'
                                placeholder='Nova Senha'
                                validate='required'/>
                            <ButtonComponent 
                                name='confirmButton'
                                label='Enviar'
                                color='primary'/>
                        </FormComponent>
                        <Separator></Separator>
                        <Box>
                            <ButtonComponent 
                                name='backButton'
                                label='Criar Conta'
                                color='secondary'
                                onClick={() => this.handleRedirect('/cadastro')}/>
                        </Box>
                    </CardComponent>
                </Column>       
            </Container>
        );
    }
}


