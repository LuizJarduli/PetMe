import { Component } from 'react';
import { IUserPropertiesModel } from '../../../../core/api/cadastro/cadastro.api.properties';
import { DescriptionContainer, FeedItemBody, FeedItemContainer, FeedItemFooter, FeedItemHeader, FeedItemHeaderUser, LikeContainer, PetName } from './style';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconLookup, IconDefinition, findIconDefinition, library } from '@fortawesome/fontawesome-svg-core';
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
    state: { alreadyLiked: boolean; redirect: string; numberOfLikes: number; };

    /**
     * Verifica se o usuário logado possui curtida registrada no pet
     * @param likes array de likes do pet
     */
    private verifyLike(likes: any[]): boolean {
        return likes?.find((item) => item.usuario?.username === this.logged.username) !== undefined;
    }

    /**
     * Efetua o like ou deslike do pet
     * @param idPet id do pet
     * @param userName id do usuário
     */
    private async handleLikeClick(idPet: number, userName: string): Promise<void> {
        const idUsuario: number = (await userApi.get(userName))?.idUsuario;
        FeedApi.like(idPet, idUsuario)
            .then((response) => {
                const likes: any[] = response?.curtidas;
                const liked: boolean = this.verifyLike(likes);
                this.setState({ alreadyLiked: liked, numberOfLikes: response?.quantidadeCurtidas });
            })
            .catch((error) => toast.error(error)) 
    }

    /**
     * É chamado quando o componente é inserido no DOM.
     */
    componentDidMount(): void {
        const likes: any[] = this.props?.item?.curtidas;
        const liked: boolean = this.verifyLike(likes);
        this.setState({ alreadyLiked: liked })
    }
    
    /**
     * Renderiza os elementos da página
     */
    render(): JSX.Element {
        library.add(fas, far)

        /**
         * Buscando ícones
         */
        const heartLookup: IconLookup = { prefix: 'fas', iconName: 'heart' };
        const phoneLookup: IconLookup = { prefix: 'fas', iconName: 'phone' };
        const heartLightLookup: IconLookup = { prefix: 'far', iconName: 'heart' };
        const emailLookup: IconLookup = { prefix: 'far', iconName: 'envelope' };
        const emailDefinition: IconDefinition = findIconDefinition(emailLookup);
        const phoneDefinition: IconDefinition = findIconDefinition(phoneLookup);
        const heartDefinition: IconDefinition = findIconDefinition(heartLookup);
        const heartLightDefinition: IconDefinition = findIconDefinition(heartLightLookup);

        /** Dados necessários para renderização do pet */
        const { alreadyLiked, numberOfLikes } = this.state || {};
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
                    <img src={fotoPet || '../../../assets/default/pet4.jpg'} alt="" />
                </FeedItemBody>
                <FeedItemFooter>
                    <PetName>
                        <p><span>{nome}</span> - {cidade}, {estado}</p>
                        <div>
                            <FontAwesomeIcon icon={phoneDefinition} title={numero} className="user--contact"/>
                            <FontAwesomeIcon icon={emailDefinition} title={email} className="user--contact"/>
                        </div>
                    </PetName>
                    <LikeContainer>
                        <button 
                            type='button'
                            onClick={() => setTimeout(() => this.handleLikeClick(idPet, userLogged))}>
                                <FontAwesomeIcon icon={ alreadyLiked ? heartDefinition : heartLightDefinition } />
                        </button>
                        <p>{numberOfLikes || quantidadeCurtidas}&nbsp;&nbsp;Curtidas</p>
                    </LikeContainer>
                    <DescriptionContainer>
                        <p>{descricao}</p>
                    </DescriptionContainer>
                </FeedItemFooter>
            </FeedItemContainer>
        )
    }
}