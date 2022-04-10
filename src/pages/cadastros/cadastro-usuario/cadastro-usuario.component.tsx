import { Component } from 'react';
import { CardComponent } from '../../../components/containers/card/card.component';
import { FormComponent } from '../../../components/form/form.component';
import { ButtonComponent } from '../../../components/buttons/button.component';
import { PasswordInputComponent } from '../../../components/form/inputs/password-input/password-input.component';
import { TextInputComponent } from '../../../components/form/inputs/text-input/text-input.component';
import { EmailInputComponent } from '../../../components/form/inputs/email-input/email-input.component';
import { Container } from './style';
import { CPFInputComponent } from '../../../components/form/inputs/cpf-input/cpf-input.component';

/**
 * Pagina Cadastro Usuario
 * @author Gustavo Cecato
 * @since 03/2022
 */
export class CadastroUsuarioComponent extends Component {

    constructor(props: typeof Component) {
        super(props);
    }

    private handleCadastroFormSubmit(formData: any): void {
        console.log(formData); // TODO: criar rotina de login
    }

    /**
     * Chamado imediatamente após a montagem do componente.
     */
    componentDidMount(): void {
        document.addEventListener('onFormSubmit', (event) => {
            event.stopPropagation();
            this.handleCadastroFormSubmit(event)
        });
    }

    /**
     * Chamado imediatamente após o componente ser destruído
     */
    componentWillUnmount(): void {
        document.removeEventListener('onFormSubmit', (event) => this.handleCadastroFormSubmit(event));
    }

    render(): JSX.Element {
        return(
            <Container>

                <img src="../../assets/logo/logo.png" alt="Logo"></img>
                <p>Miclaa</p>

                <CardComponent shadow size='sm'>
                    <h1>Cadastre-se</h1>
                    <FormComponent onFormSubmit={(event) => this.handleCadastroFormSubmit(event.detail)}>
                        <TextInputComponent
                            name='userName'
                            placeholder='Usuário'
                            validate='required'
                        />
                        <EmailInputComponent
                            name='userEmail'
                            placeholder='Email'
                            validate='required'
                        />
                        <CPFInputComponent
                            name='usarCPF'
                            placeholder='CPF'
                            validate='required'
                        />
                        <PasswordInputComponent 
                                name='userPassword'
                                placeholder='Senha'
                                validate='required' />

                        <input type="checkbox" />Li e concordo com os Termos.*
                        <br/><br/>

                        <ButtonComponent 
                                name='confirmButton'
                                label='Cadastrar'
                                color='primary'/>

                    </FormComponent>

                </CardComponent>       
            </Container>
        );
    }
}