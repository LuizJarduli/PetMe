import { Component } from 'react';
import { toast } from 'react-toastify';
import { TopMenuComponent } from '../../../components/menu/top/top-menu.component';
import { BotMenuComponent } from '../../../components/menu/bot/bot-menu.component';
import { LoadingComponent } from '../../../components/utility-components/loading.component';
import { userApi } from '../../../core/api/cadastro/cadastro.api';
import { IUserPropertiesModel } from '../../../core/api/cadastro/cadastro.api.properties';
import { StorageService } from '../../../core/services/storageService';
import { PetContainer, UserPetsList, UserProfileData, UserProfileInfo, UserProfilePicture } from './style';

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
        }
    }

    state: { loading: boolean; redirect?: string; userData: IUserPropertiesModel | null; activeComponent: boolean, isUserLogged: boolean};

    /**
     * Chamado imediatamente após a montagem do componente.
     */
    componentDidMount(): void {
        const { username, token } = StorageService.getInstance().getUser();
        const path: string[] = window.location.href?.split('/');
        this.verifyAccessToThePage(path, username);
    }

    /**
     * Verifica o acesso na página, se é pra visualizar o perfil próprio do usuário ou algum outro para consulta
     * @param path array com os paths dessa tela
     * @param loggedUser usuário logado
     */
    private verifyAccessToThePage(path: string[], loggedUser: string): void {
        const lastIndex: number = path.length - 1;
        const pathAccess: string = path[lastIndex] === loggedUser || path[lastIndex] === 'meu-perfil' ? loggedUser : path[lastIndex];
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
                toast.error(error);
            })
            .finally(() => this.setState({ loading: false, activeComponent: true }));
    }

    /**
     * Renderiza os elementos da página
     */
    render(): JSX.Element {
        /** TODO: alinhar com back nome do atributo que guarda img de perfil */
        const { userData, loading, activeComponent } = this.state || {};
        const { username, email, fotoPerfil, pets } = userData || {};

        return (
            <>
                { loading && (<LoadingComponent></LoadingComponent>) }               
                <TopMenuComponent />
                { activeComponent && (
                    <UserProfileInfo>
                        <UserProfilePicture>
                            <img src={ fotoPerfil ? fotoPerfil : '../../../assets/default/default-profile.png' } alt="Imagem de Perfil"/>
                        </UserProfilePicture>
                        <UserProfileData>
                            <h3>{ username || 'Username' }</h3>
                        </UserProfileData>
                    </UserProfileInfo>
                )}
                <UserPetsList>
                    
                    <div className='row'>
                        { pets?.map((pet: any, index: number) => {
                            return (
                                <div className='col-sm-4 text-center' key={index}>
                                    <PetContainer>
                                        <img src={`../../../assets/default/pet${index+1}.jpg`} alt="Imagem de Perfil"/>
                                    </PetContainer>
                                </div>
                            )
                        })}
                    </div>
                </UserPetsList>
                <BotMenuComponent/>
            </>
        );
    }
}