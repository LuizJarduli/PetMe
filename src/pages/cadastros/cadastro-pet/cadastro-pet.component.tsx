import { Component } from 'react';
import { CardComponent } from '../../../components/containers/card/card.component';
import { FormComponent } from '../../../components/form/form.component';
import { ButtonComponent } from '../../../components/buttons/button.component';
import { PhoneInputComponent } from '../../../components/form/inputs/phone-input/phone-input.component';
import { TextInputComponent } from '../../../components/form/inputs/text-input/text-input.component';
import { DescInputComponent } from '../../../components/form/inputs/desc-input/desc-input.component';
import { Column, Container, Aux } from './style';
import { TopMenuComponent } from '../../../components/menu/top/top-menu.component';
import { BotMenuComponent } from '../../../components/menu/bot/bot-menu.component';
import { CadItemComponent } from '../../../components/containers/card/cad-item/cad-item.component';
import { userApi } from '../../../core/api/cadastro/cadastro.api';
import { IUserPetPropertiesModel, IUserPropertiesModel } from '../../../core/api/cadastro/cadastro.api.properties';
import { LoadingComponent } from '../../../components/utility-components/loading.component';
import { Navigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { StorageService } from '../../../core/services/storageService';
import { FileInputComponent } from '../../../components/form/inputs/file-cropped-input/file-input.component';
import { FeedItemComponent } from '../../../components/containers/card/feed-Item/feed-item.component';

/**
 * Pagina Cadastro Pet
 * @author Gustavo Cecato
 * @since 06/2022
 */
export class CadastroPetComponent extends Component {
    constructor(props: typeof Component) {
        super(props);
    }

    state: { redirect: string; loading: boolean; user?: IUserPropertiesModel; pet?: IUserPetPropertiesModel; preview?: boolean};

    /**
     * Efetua o cadastro do usuário na API
     *
     * @param formData dados do formulário
     */
    private handleCadastroFormSubmit(formData: any): void {
        const { preview, user } = this.state || {}
        const { idUsuario } = user || {};
        const body: any = {
            nome: formData.petName.value,
            cidade: formData.petCidade.value,
            descricao: formData.descricao.value,
            estado: formData.petEstado.value,
            fotoPet: formData.fotoPet.value,
            numero: formData.petTelefone.value,
        }

        this.setState({ pet: body });

        if (!preview) {
            this.setState({ loading: true });
            userApi.createPet(idUsuario as number, body)
                .then(() => toast.success('Pet Cadastro realizado com sucesso!'))
                .catch((error) => toast.error(error))
                .finally(() => this.setState({ loading: false, redirect: '/meu-perfil' }));
        }
        this.setState({ preview: false });
    }

    /**
     * Recupera os dados do user Logado
     *
     * @param userId id do usuário logado
     */
     private getUserData(userName: string): void {
        this.setState({ loading: true});
        userApi.get(userName)
            .then((response: IUserPropertiesModel) => {
                this.setState({ user: response});
            })
            .catch((error) => {
                toast.error('Usuário não encontrado');
                this.handleRedirect('/');
            })
            .finally(() => this.setState({ loading: false }));
    }

    /**
     * Trata os redirecionamentos da página com a rota informada
     * @param route rota a ser redirecionada
     */
     private handleRedirect(route: string): void {
        this.setState({ redirect: route });
    }

    /**
     * seta a página para liberar o preview do pet
     */
    private handlePreview(): void {
        this.setState({ preview: true });
    }

    /**
     * Chamado imediatamente após a montagem do componente.
     */
    componentDidMount(): void {
        const { username, token } = StorageService.getInstance().getUser() || {};
        this.getUserData(username);
        document.addEventListener('onFormSubmit', (event) => {
            event.stopPropagation();
            const path: string[] = window.location.href?.split('/');
            if (path[path.length - 1] === 'cadastro-pet') {
                this.handleCadastroFormSubmit((event as CustomEvent).detail)
            }
        });
    }

    /**
     * Chamado imediatamente após o componente ser destruído
     */
    componentWillUnmount(): void {
        document.removeEventListener('onFormSubmit', (event) => this.handleCadastroFormSubmit((event as CustomEvent).detail));
        setTimeout(() => window.location.reload(),  500);
    }

    /**
     * Renderiza os elementos da página
     */
    render(): JSX.Element {
        return(
            <>
                <TopMenuComponent/>
                <Aux></Aux>
                <Container>
                    { this.state?.loading && (<LoadingComponent></LoadingComponent>) }
                    { this.state?.redirect && <Navigate to={this.state.redirect} />}
                    <Column>
                        <div>
                            <FeedItemComponent item={{ ...this.state?.pet, usuario: this.state?.user }} preview={true}/>
                        </div>
                    </Column>
                    <Column>
                        <CardComponent size='md'>
                            <FormComponent onFormSubmit={(event) => this.handleCadastroFormSubmit(event.detail)}>
                                <TextInputComponent 
                                    name='petName'
                                    placeholder='Nome do Maskote'
                                    validate='required' />
                                <DescInputComponent 
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
                                <FileInputComponent
                                    name='fotoPet'/>
                                <ButtonComponent 
                                    name='previewButton'
                                    label='Visualizar Prévia'
                                    color='primary'
                                    onClick={() => this.handlePreview()}/>
                                <ButtonComponent 
                                    name='confirmCadButton'
                                    label='Cadastrar'
                                    color='primary'/>
                            </FormComponent>
                        </CardComponent>       
                    </Column>
                </Container>
                <BotMenuComponent/>
                <Aux></Aux>
            </>

        );
    }
}