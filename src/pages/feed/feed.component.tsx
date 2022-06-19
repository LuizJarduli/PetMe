import { Component } from 'react';
import { Navigate } from 'react-router-dom';
import { FeedItemComponent } from '../../components/containers/card/feed-Item/feed-item.component';
import { TopMenuComponent } from '../../components/menu/top/top-menu.component';
import { LoadingComponent } from '../../components/utility-components/loading.component';
import { IUserPropertiesModel } from '../../core/api/cadastro/cadastro.api.properties';
import { FeedItemSuggestions, FeedWrapper } from './style';
import StickyBox from 'react-sticky-box';
import { FeedApi } from '../../core/api/feed/feed.api';
import { toast } from 'react-toastify';
import { CardComponent } from '../../components/containers/card/card.component';
import { SearchInputComponent } from '../../components/form/inputs/search-input/search-input.component';
import { FeedItemHeaderUser } from '../../components/containers/card/feed-Item/style';
import { StorageService } from '../../core/services/storageService';
import { userApi } from '../../core/api/cadastro/cadastro.api';

/**
 * Página do feed
 * @author Luiz Miguel
 * @since 06/2022
 */
export class FeedPageComponent extends Component {
    constructor(props: Component) {
        super(props);
        this.state = {
            loading: false,
            redirect: null,
            pets: [],
            user: null,
            allUsers: [],
        }
    }

    state: { loading: boolean; redirect: string | null; pets: any[]; user?: IUserPropertiesModel | null; allUsers: IUserPropertiesModel[]; };
    
    /**
     * Efetua a busca por pets pelo nome
     */
    private handleSearch = (searchArg: string): void  => {
        FeedApi.getList(searchArg || '')
            .then((response) => this.setState({pets: [ ...response]}))
            .catch((error) => toast.error(error))
    }
    
    /**
     * Trata os redirecionamentos da página com a rota informada
     * @param route rota a ser redirecionada
     */
    private handleRedirect(route: string): void {
        this.setState({ redirect: route });
    }

    /**
     * É chamado quando o componente é inserido no DOM
     */
    componentDidMount(): void {
        this.setState({ loading: true });
        const { username, token } = StorageService.getInstance().getUser() || {};

        Promise.all([
            userApi.get(username),
            FeedApi.getList(),
            userApi.getAll(),
        ])
            .then((response) => this.setState({user: response[0], pets: [ ...response[1]], allUsers: [...response[2]] }))
            .catch((error) => toast.error(error))
            .finally(() => this.setState({ loading: false }));
    }

    /**
     * Renderiza os elementos da página
     */
    render(): JSX.Element {
        const { loading, pets, user, allUsers, redirect } = this.state || {};

        return (
            <>
                <FeedWrapper>
                    <TopMenuComponent />

                    <div className='row'>
                        <div className='col-sm-8'>
                                {
                                    pets.map((pet, index) => {
                                        return (
                                            <FeedItemComponent item={pet} key={index}/>
                                        )
                                    })
                                }
                        </div>
                        <div className='col-sm-4'> 
                            <StickyBox offsetTop={100} offsetBottom={20}>
                                <SearchInputComponent 
                                    name='searchPets'
                                    placeholder='Buscar'
                                    onSubmit={this.handleSearch}/>
                                <br />
                                <CardComponent size='md'>
                                    <FeedItemHeaderUser>
                                        <img src={user?.fotoPerfil || '../../../assets/default/pet5.jpg'} alt="" />
                                        <p>{user?.username}</p>
                                    </FeedItemHeaderUser>
                                    <hr />
                                    <FeedItemSuggestions>
                                        <p className='title'>Sugestões</p>
                                        {
                                            allUsers?.map((userSuggested, index) => {
                                                if ( userSuggested?.username !== user?.username) {
                                                    return (
                                                        <div className='userSuggested' key={index}>
                                                            <button
                                                                type='button'
                                                                onClick={() => this.handleRedirect(`/perfil/${userSuggested?.username}`)}>
                                                                    <img src={userSuggested?.fotoPerfil || '../../../assets/default/pet5.jpg'} alt="" />
                                                                    <p>{userSuggested?.username}</p>
                                                            </button>
                                                        </div>
                                                    )
                                                }
                                            })
                                        }
                                    </FeedItemSuggestions>
                                </CardComponent>
                            </StickyBox>
                        </div>
                    </div>
                </FeedWrapper>
                { redirect && <Navigate to={redirect} />}
                { loading && (<LoadingComponent></LoadingComponent>) }
            </>
        )
    }
}