import { Component } from 'react';
import { toast } from 'react-toastify';
import { TopMenuComponent } from '../../../components/menu/top/top-menu.component';
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
        }
    }

    state: { loading: boolean; redirect?: string; userData: IUserPropertiesModel | null; activeComponent: boolean };

    /**
     * Chamado imediatamente após a montagem do componente.
     */
    componentDidMount(): void {
        const { username, token } = StorageService.getInstance().getUser();
        this.getUserData(username); // Organizar service para recuperar id do user logado
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
            .catch((error) => toast.error(error))
            .finally(() => this.setState({ loading: false, activeComponent: true }));
    }

    /**
     * Renderiza os elementos da página
     */
    render(): JSX.Element {
        /** TODO: alinhar com back nome do atributo que guarda img de perfil */
        const { userData, loading, activeComponent } = this.state || {};
        const { username, email, profilePic } = userData || {};

        const pets: any = [
            {
                idPet: 1,
                nome: 'Mike'
            },
            {
                idPet: 2,
                nome: 'Luna'
            },
            {
                idPet: 3,
                nome: 'Bolinha'
            }
        ]

        return (
            <>
                { loading && (<LoadingComponent></LoadingComponent>) }
                <TopMenuComponent />
                { activeComponent && (
                    <UserProfileInfo>
                        <UserProfilePicture>
                            <img src={ profilePic ? profilePic : '../../../assets/default/default-profile.png' } alt="Imagem de Perfil"/>
                        </UserProfilePicture>
                        <UserProfileData>
                            <h3>{ username || 'Teste' }</h3>
                            <h4>{ email || 'Teste' }</h4>
                        </UserProfileData>
                    </UserProfileInfo>
                )}
                <UserPetsList>
                    <h3>Meus Pets</h3>
                    <hr />
                    <div className='row'>
                        { pets?.map((pet: any, index: number) => {
                            return (
                                <div className='col-sm-4 text-center' key={index}>
                                    <PetContainer>
                                        <img src={`../../../assets/default/pet${index+1}.jpg`} alt="Imagem de Perfil"/>
                                        <h5>{pet.nome || 'Gato Cachorro Passarinho' }</h5>
                                    </PetContainer>
                                </div>
                            )
                        })}
                    </div>
                </UserPetsList>
            </>
        );
    }
}