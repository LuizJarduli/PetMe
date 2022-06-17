import { Component } from 'react';
import { CardComponent } from '../../../components/containers/card/card.component';
import { FormComponent } from '../../../components/form/form.component';
import { ButtonComponent } from '../../../components/buttons/button.component';
import { PhoneInputComponent } from '../../../components/form/inputs/phone-input/phone-input.component';
import { TextInputComponent } from '../../../components/form/inputs/text-input/text-input.component';
import { Column, Container } from './style';
import { TopMenuComponent } from '../../../components/menu/top/top-menu.component';
import { BotMenuComponent } from '../../../components/menu/bot/bot-menu.component';
import { CadItemComponent } from '../../../components/containers/card/cad-item/cad-item.component';
import { userApi } from '../../../core/api/cadastro/cadastro.api';
import { IUserPropertiesModel } from '../../../core/api/cadastro/cadastro.api.properties';
import { LoadingComponent } from '../../../components/utility-components/loading.component';
import { Navigate } from 'react-router-dom';
import { toast } from 'react-toastify';

/**
 * Pagina Cadastro Pet
 * @author Gustavo Cecato
 * @since 06/2022
 */
export class CadastroPetComponent extends Component {

    constructor(props: typeof Component) {
        super(props);
    }

    state: { redirect: false, loading: false};

    /**
     * Efetua o cadastro do usuário na API
     *
     * @param formData dados do formulário
     */
    private handleCadastroFormSubmit(formData: any): void {
        this.setState({ loading: true });
        userApi.create({
            username: formData.userName.value,
            senha: formData.userPassword.value,
            cpf: formData.usarCPF.value,
            email: formData.userEmail.value,
        })
        .then(() => toast.success('Cadastro realizado com sucesso!'))
        .catch((error) => toast.error(error))
        .finally(() => this.setState({ loading: false, redirect: '/' }));
    }

    /**
     * Chamado imediatamente após a montagem do componente.
     */
    componentDidMount(): void {
        document.addEventListener('onFormSubmit', (event) => {
            event.stopPropagation();
            const path: string[] = window.location.href?.split('/');
            if (path[path.length - 1] === 'cadastro') {
                this.handleCadastroFormSubmit((event as CustomEvent).detail)
            }
        });
    }

    /**
     * Chamado imediatamente após o componente ser destruído
     */
    componentWillUnmount(): void {
        document.removeEventListener('onFormSubmit', (event) => this.handleCadastroFormSubmit((event as CustomEvent).detail));
    }

    render(): JSX.Element {
        return(
            <>
                <TopMenuComponent></TopMenuComponent>
                <Container>
                    { this.state?.loading && (<LoadingComponent></LoadingComponent>) }
                    { this.state?.redirect && <Navigate to={this.state.redirect} />}
                    
                    <Column>
                        <CadItemComponent>
                        </CadItemComponent>
                    </Column>
                    <Column>
                        <CardComponent size='md'>
                            
                            <FormComponent onFormSubmit={(event) => this.handleCadastroFormSubmit(event.detail)}>
                                <TextInputComponent 
                                    name='petName'
                                    placeholder='Nome do Maskote'
                                    validate='required' />

                                <TextInputComponent 
                                    name='descricao'
                                    placeholder='Descrição'
                                    validate='required' />

                                <PhoneInputComponent 
                                    name='petTelefone'
                                    placeholder='Número (xx)xxxxx-xxxx'
                                    validate='required' />

                                <TextInputComponent 
                                    name='petEstado'
                                    placeholder='Estado'
                                    validate='required' />
                                
                                <TextInputComponent 
                                    name='petCidade'
                                    placeholder='Cidade'
                                    validate='required' />

                                <ButtonComponent 
                                    name='confirmCadButton'
                                    label='Cadastrar'
                                    color='primary'/>

                            </FormComponent>
                        </CardComponent>       
                    </Column>
                </Container>
                <BotMenuComponent></BotMenuComponent>
            </>

        );
    }
}