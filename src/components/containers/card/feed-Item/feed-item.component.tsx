import { Component } from 'react';
import { IUserPropertiesModel } from '../../../../core/api/cadastro/cadastro.api.properties';
import { FeedItemContainer } from './style';

export class FeedItemComponent extends Component<{ idPet: number; nome: string}, IUserPropertiesModel> {
    constructor(props: { idPet: number; nome: string} & IUserPropertiesModel) {
        super(props);
    }

    render(): JSX.Element {
        return (
            <FeedItemContainer>
                <FeedItemHeader></FeedItemHeader>
                <FeedItemBody></FeedItemBody>
                <FeedItemFooter></FeedItemFooter>
            </FeedItemContainer>
        )
    }
}