import { Component } from 'react';
import { IUserPropertiesModel } from '../../../../core/api/cadastro/cadastro.api.properties';
import { FeedItemBody, FeedItemContainer, FeedItemFooter, FeedItemHeader, FeedItemHeaderUser, LikeContainer } from './style';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    IconLookup,
    IconDefinition,
    findIconDefinition,
    library
} from '@fortawesome/fontawesome-svg-core'
import { StorageService } from '../../../../core/services/storageService';
import { userApi } from '../../../../core/api/cadastro/cadastro.api';
import { FeedApi } from '../../../../core/api/feed/feed.api';
import { toast } from 'react-toastify';

/**
 * Componente de item do feed do sistema
 * @author Luiz Miguel
 * @since 06/2022
 */
export class FeedItemComponent extends Component<any> {
    constructor(props: any) {
        super(props);
    }

    /** Dados do usuário logado */
    private logged: IUserPropertiesModel =  StorageService.getInstance().getUser();
    /** State do componente */
    state: { alreadyLiked: boolean; redirect: string; };

    /**
     * Efetua o like ou deslike do pet
     * @param idPet id do pet
     * @param userName id do usuário
     */
    private async handleLikeClick(idPet: number, userName: string): Promise<void> {
        const idUsuario: number = (await userApi.get(userName))?.idUsuario;
        FeedApi.like(idPet, idUsuario)
            .then(() => {
                this.setState({ alreadyLiked: true}) // MOCK temporário até existir get por id do pet
                toast.success('Pet Curtido!');
            })
            .catch((error) => toast.error(error)) 
    }

    /**
     * É chamado quando o componente é inserido no DOM.
     */
    componentDidMount(): void {
        const likes: any[] = this.props?.item?.curtidas;
        const liked: boolean = likes?.find((item) => item.usuario?.username === this.logged.username);
        this.setState({ alreadyLiked: liked })
    }
    
    /**
     * Renderiza os elementos da página
     */
    render(): JSX.Element {
        library.add(fas, far)

        const heartLookup: IconLookup = { prefix: 'fas', iconName: 'heart' };
        const heartLightLookup: IconLookup = { prefix: 'far', iconName: 'heart' };
        const heartDefinition: IconDefinition = findIconDefinition(heartLookup);
        const heartLightDefinition: IconDefinition = findIconDefinition(heartLightLookup);
        const { alreadyLiked } = this.state || {};
        const { username: userLogged } = StorageService.getInstance().getUser();
        const { 
            fotoPet,
            idPet,
            nome,
            numero,
            quantidadeCurtidas,
            cidade,
            descricao,
            estado,
            curtidas,
            usuario,
        } = this.props?.item;

        const { 
            fotoPerfil,
            email,
            username
        } = usuario;

        return (
            <FeedItemContainer>
                <FeedItemHeader>
                    <FeedItemHeaderUser>
                        <img src={fotoPerfil || '../../../assets/default/pet5.jpg'} alt="" />
                        <p>{username}</p>
                    </FeedItemHeaderUser>
                </FeedItemHeader>
                <FeedItemBody>
                    <img src={fotoPet || '../../../assets/default/pet1.jpg'} alt="" />
                </FeedItemBody>
                <FeedItemFooter>
                    <LikeContainer>
                        <button 
                            type='button'
                            onClick={() => this.handleLikeClick(idPet, userLogged)}>
                                <FontAwesomeIcon icon={ alreadyLiked ? heartDefinition : heartLightDefinition } />
                        </button>
                        <p>{quantidadeCurtidas}&nbsp;&nbsp;Curtidas</p>
                    </LikeContainer>
                </FeedItemFooter>
            </FeedItemContainer>
        )
    }
}