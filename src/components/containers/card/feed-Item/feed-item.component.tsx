import { Component } from 'react';
import { IUserPropertiesModel } from '../../../../core/api/cadastro/cadastro.api.properties';
import { FeedItemBody, FeedItemContainer, FeedItemFooter, FeedItemHeader, FeedItemHeaderUser } from './style';

export class FeedItemComponent extends Component<any> {
    constructor(props: any) {
        super(props);
    }

    render(): JSX.Element {
        const pet = this.props?.item;
        const { fotoPerfil, email, username } = this.props.item?.usuario;
        return (
            <FeedItemContainer>
                <FeedItemHeader>
                    <FeedItemHeaderUser>
                        <img src={fotoPerfil || '../../../assets/default/pet5.jpg'} alt="" />
                        <p>{username}</p>
                    </FeedItemHeaderUser>
                </FeedItemHeader>
                <FeedItemBody>
                    <img src={pet.fotoPet || '../../../assets/default/pet1.jpg'} alt="" />
                </FeedItemBody>
                <FeedItemFooter>
                    
                </FeedItemFooter>
            </FeedItemContainer>
        )
    }
}