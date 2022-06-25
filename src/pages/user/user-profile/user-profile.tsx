import { Component } from 'react';
import { toast } from 'react-toastify';
import { TopMenuComponent } from '../../../components/menu/top/top-menu.component';
import { BotMenuComponent } from '../../../components/menu/bot/bot-menu.component';
import { LoadingComponent } from '../../../components/utility-components/loading.component';
import { userApi } from '../../../core/api/cadastro/cadastro.api';
import { IUserPetPropertiesModel, IUserPropertiesModel } from '../../../core/api/cadastro/cadastro.api.properties';
import { StorageService } from '../../../core/services/storageService';
import { PetContainer, UserPetsList, UserProfileData, UserProfileInfo, UserProfilePicture } from './style';
import { Navigate } from 'react-router-dom';
import { ButtonComponent } from '../../../components/buttons/button.component';
import { Button, Modal } from 'react-bootstrap';
import { FormComponent } from '../../../components/form/form.component';
import { CPFInputComponent } from '../../../components/form/inputs/cpf-input/cpf-input.component';
import { EmailInputComponent } from '../../../components/form/inputs/email-input/email-input.component';
import { FileInputComponent } from '../../../components/form/inputs/file-cropped-input/file-input.component';
import { PasswordInputComponent } from '../../../components/form/inputs/password-input/password-input.component';
import { TextInputComponent } from '../../../components/form/inputs/text-input/text-input.component';
import { DescInputComponent } from '../../../components/form/inputs/desc-input/desc-input.component';
import { PhoneInputComponent } from '../../../components/form/inputs/phone-input/phone-input.component';

/**
 * Tela de perfil do usuário
 * @author Luiz Miguel
 * @since 05/2022
 */
export class UserProfilePageComponent extends Component {
    constructor(props: Component) {
        super(props);
        this.state = {
            loading: false,
            userData: null,
            activeComponent: false,
            isUserLogged: false,
            showModal: false,
        }
    }

    private isPet: number;

    state: { loading: boolean; redirect?: string; userData: IUserPropertiesModel | null; activeComponent: boolean, isUserLogged: boolean, showModal: boolean, currentModal?: string, modalParams?: any };

    /**
     * Chamado imediatamente após a montagem do componente.
     */
    componentDidMount(): void {
        const { username, token } = StorageService.getInstance().getUser() || {};
        const path: string[] = window.location.href?.split('/');
        this.verifyAccessToThePage(path, username);

        document.addEventListener('onFormSubmit', (event) => {
            event.stopPropagation();
            const path: string[] = window.location.href?.split('/');
            if (path[path.length - 1] === 'meu-perfil' || path[path.length - 1] === username) {
                this.handleCadastroFormSubmit((event as CustomEvent).detail)
            }
        });
    }

    /**
     * Trata os redirecionamentos da página com a rota informada
     * @param route rota a ser redirecionada
     */
    private handleRedirect(route: string): void {
        this.setState({ redirect: route });
    }

    /**
     * Abre o modal especificado
     * @param action modal especificado
     */
    private openModal(action: string, data?: any): void {
        this.setState({ showModal: true, currentModal: action, modalParams: data});
    }
    
    /**
     * Fecha o modal e atualiza os dados do usuário na tela
     * @param username nome do usuário
     */
    private closeModal(username: string): void {
        this.setState({ showModal: false });
        this.getUserData(username);
    }

    /**
     * Recupera o modal específico para ser aberto na ação de chamada
     * @param modalToOpen modal especificado
     */
    private recoverModal(modalToOpen: string, data?: any): JSX.Element {
        let element: JSX.Element = (<></>);
        switch (modalToOpen) {
            case 'edit':
                element = this.editModal();
                break;
            case 'deactivate':
                element = this.deactivateModal();
                break;
            case 'donatePet':
                element = this.donatePetModal(data);
                break;
            case 'editPet': 
                element = this.editPetModal(data);
                break;
            default: break;
        }

        return element;
    }

    /**
     * Efetua a atualização do usuário na API
     *
     * @param formData dados do formulário
     */
     private handleCadastroFormSubmit(formData: any): void {
        console.log(formData, this.isPet);
        if (this.isPet) {
            this.editPet(formData, this.isPet);
        } else {
            this.setState({ loading: true });
            const { idUsuario } = this.state.userData || {};
            const { userName, userEmail, userCity, userState, userPassword, userNewPassword, fotoPerfil} = formData || {};
    
            /** Atualiza os dados do usuário */
            userApi.editData(idUsuario as number, {
                email: userEmail.value,
                cidade: userCity.value,
                estado: userState.value,
            })
                .then(() => {
                    toast.success('Dados Alterados realizado com sucesso!');
                    const promises = [];
                    /** Caso tenha atualizado sua senha*/
                    if (userPassword.value && userNewPassword.value) {
                        promises.push(userApi.editPassword(idUsuario as number, {
                            novaSenha: userNewPassword.value,
                            senha: userPassword.value,
                        }));
                    }
            
                    /** Caso tenha alterado a foto de perfil */
                    if (fotoPerfil.value) {
                        promises.push(userApi.editProfilePic(idUsuario as number, {
                            fotoPerfil: fotoPerfil.value,
                        }));
                    }
                    /** Executa todas as ações de edição */
                    this.setState({ loading: true });
                    promises.length > 0 && Promise.all(promises)
                        .then(() => toast.success('Senha e/ou foto de perfil atualizados com sucesso!'))
                        .catch((error) => toast.error(error))
                        .finally(() => this.setState({ loading: false }));
    
                })
                .catch((error) => toast.error(error))
                .finally(() => this.setState({ loading: false }));
        }  

    }

    /**
     * Doa o pet especificado
     * @param id id do pet
     */
    private donatePet(id: number): void {
        this.setState({ loading: true });
        const { idUsuario } = this.state.userData || {};
        userApi.donatePet(idUsuario as number, id)
            .then(() => toast.success('Seu Pet foi doado com sucesso!'))
            .catch((error) => toast.error(error))
            .finally(() => {
                this.setState({ loading: false });
            });
    }

    /**
     * Edita os dados do pet
     * @param params dados do formulário
     * @param idPet id do pet a ser editado
     */
    private editPet(params: any, idPet: number): void {
        this.setState({ loading: true });
        const { idUsuario } = this.state.userData || {};
        userApi.editPetData(idUsuario as number, idPet, {
            numero: params.petTelefone.value,
            estado: params.petEstado.value,
            cidade: params.petCidade.value,
            descricao: params.descricao.value,
            fotoPet: params.fotoPet.value,
        })
            .then(() => toast.success('Seu Pet foi editado com sucesso!'))
            .catch((error) => toast.error(error))
            .finally(() => this.setState({ loading: false }));
    }

    /**
     * Desativa a conta do usuário
     */
    private deactiveAccount(): void {
        this.setState({ loading: true });
        const { idUsuario } = this.state.userData || {};
        userApi.deactivateAccount(idUsuario as number)
            .then(() => toast.success('Sua conta foi desativada com sucesso! Até mais'))
            .catch((error) => toast.error(error))
            .finally(() => {
                this.setState({ loading: false })
                this.handleRedirect('/');
                StorageService.getInstance().clearStorage();
            });
    }

    /**
     * Verifica o acesso na página, se é pra visualizar o perfil próprio do usuário ou algum outro para consulta
     * @param path array com os paths dessa tela
     * @param loggedUser usuário logado
     */
    private verifyAccessToThePage(path: string[], loggedUser: string): void {
        const lastIndex: number = path.length - 1;
        const access: boolean = path[lastIndex] === loggedUser || path[lastIndex] === 'meu-perfil';
        const pathAccess: string = access ? loggedUser : path[lastIndex];
        this.setState({ isUserLogged: access });
        this.getUserData(pathAccess);
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
                this.setState({ userData: response});
            })
            .catch((error) => {
                toast.error('Usuário não encontrado');
                this.handleRedirect('/');
            })
            .finally(() => this.setState({ loading: false, activeComponent: true }));
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
        const { userData, loading, activeComponent, redirect, isUserLogged, showModal, currentModal, modalParams } = this.state || {};
        const { username, email, fotoPerfil, pets } = userData || {};

        return (
            <>
                { loading && (<LoadingComponent></LoadingComponent>) }
                { redirect && <Navigate to={redirect} />}             
                <TopMenuComponent />
                { activeComponent && (
                    <UserProfileInfo>
                        <UserProfilePicture>
                            <img src={ fotoPerfil ? fotoPerfil : '../../../assets/default/default-profile.png' } alt="Imagem de Perfil"/>
                        </UserProfilePicture>
                        <UserProfileData>
                            <h3>{ username || 'Username' }</h3>
                            <p>{ email }</p>
                            <p><span>{ pets?.length || 0 }</span> Pet(s) Cadastrado(s)</p>
                            {
                                isUserLogged ? (
                                    <div className='buttons--container'>
                                        <ButtonComponent
                                            className='buttons--margin'
                                            name='editProfile'
                                            label='Editar Perfil'
                                            color='secondary'
                                            onClick={() => this.openModal('edit')}></ButtonComponent>
                                        <ButtonComponent
                                            className='buttons--margin'
                                            name='inactivateProfile'
                                            label='Desativar Perfil'
                                            color='red'
                                            onClick={() => this.openModal('deactivate')}></ButtonComponent>
                                    </div>
                                ) : (<></>)
                            }
                        </UserProfileData>
                    </UserProfileInfo>
                )}
                <UserPetsList>
                    <div className='row'>
                        { pets?.map((pet: any, index: number) => {
                            if (pet.ativo) {
                                return (
                                    <div className='col-sm-4 text-center' key={index}>
                                        
                                        <PetContainer>
                                            <img src={pet.fotoPet || '../../../assets/default/pet5.jpg'} alt="Imagem de Perfil"/>
                                            {
                                                isUserLogged ? (
                                                    <div className='pet-buttons--container'>
                                                        <ButtonComponent
                                                            className='buttons--margin'
                                                            name='editPetProfile'
                                                            label='Editar Pet'
                                                            color='secondary'
                                                            onClick={() => this.openModal('editPet', pet)}></ButtonComponent>
                                                        <ButtonComponent
                                                            className='buttons--margin'
                                                            name='inactivatePet'
                                                            label='Doado'
                                                            color='primary'
                                                            onClick={() => this.openModal('donatePet', pet.idPet)}></ButtonComponent>
                                                    </div>
                                                ) : (<></>)
                                            }
                                        </PetContainer>
                                    </div>
                                )
                            }
                        })}
                    </div>
                </UserPetsList>
                <BotMenuComponent/>
                <Modal show={showModal}>
                    <Modal.Header>
                        <Modal.Title>Atenção</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>{this.recoverModal(currentModal as string, modalParams)}</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => {
                            this.isPet = 0;
                            this.closeModal(username as string);
                        }}>
                            Fechar
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        );
    }

    /**
     * Retorna o modal de desativação da conta do usuário
     */
    private deactivateModal(): JSX.Element {
        return (
            <>
                <p>Você tem certeza de que deseja desativar sua conta?</p>
                <ButtonComponent
                    name='confirmCadButton'
                    label='Desativar Conta'
                    color='red'
                    onClick={() => this.deactiveAccount()}/>
            </>
        )
    }

    /**
     * Retorna o modal de confirmação de doação do pet especificado
     */
     private donatePetModal(petId: number): JSX.Element {
        return (
            <>
                <p>O Pet foi realmente Doado?</p>
                <ButtonComponent
                    name='confirmCadButton'
                    label='Doar Pet'
                    color='primary'
                    onClick={() => this.donatePet(petId)}/>
            </>
        )
    }

    /**
     * Retorna o Modal de edição da conta
     */
    private editModal(): JSX.Element {
        const { username, email, fotoPerfil, pets, cidade, estado} = this.state?.userData || {};
        return (
            <FormComponent onFormSubmit={(event) => this.handleCadastroFormSubmit(event.detail)}>
                <TextInputComponent
                    name='userName'
                    placeholder='Usuário'
                    validate='required'
                    value={username || ''}
                    readonly={true}/>
                <EmailInputComponent
                    name='userEmail'
                    placeholder='Email'
                    validate='required'
                    value={email || ''}/>
                <TextInputComponent
                    name='userCity'
                    placeholder='Cidade'
                    value={cidade || ''}/>
                <TextInputComponent
                    name='userState'
                    placeholder='Estado'
                    value={estado || ''}/>
                <PasswordInputComponent 
                    name='userPassword'
                    placeholder='Senha'/>
                <PasswordInputComponent 
                    name='userNewPassword'
                    placeholder='Nova Senha'/>
                <FileInputComponent
                    name='fotoPerfil'/>
                <hr />
                <br/>
                <ButtonComponent 
                    name='confirmCadButton'
                    label='Editar'
                    color='primary'/>
            </FormComponent>
        )
    }

    /**
     * Retorna o modal de edição de pet
     * @param petId id do pet
     * @returns 
     */
    private editPetModal(pet: IUserPetPropertiesModel): JSX.Element {
        const { idPet, nome, numero, cidade, estado, descricao } = pet || {};
        this.isPet = idPet;
        return (
            <FormComponent onFormSubmit={(event) => this.handleCadastroFormSubmit(event.detail)}>
                <TextInputComponent 
                    name='petName'
                    placeholder='Nome do Maskote'
                    validate='required'
                    value={nome}
                    readonly={true} />
                <DescInputComponent 
                    name='descricao'
                    placeholder='Descrição'
                    validate='required'
                    value={descricao} />
                <PhoneInputComponent 
                    name='petTelefone'
                    placeholder='Número (xx)xxxxx-xxxx'
                    validate='required'
                    value={numero} />
                <TextInputComponent 
                    name='petEstado'
                    placeholder='Estado'
                    validate='required'
                    value={estado} />
                <TextInputComponent 
                    name='petCidade'
                    placeholder='Cidade'
                    validate='required'
                    value={cidade} />
                <FileInputComponent
                    name='fotoPet'/>
                <ButtonComponent 
                    name='confirmCadButton'
                    label='Editar Pet'
                    color='primary'/>
            </FormComponent>
        );
    }
}