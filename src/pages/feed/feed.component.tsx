import { Component } from 'react';
import { FeedItemComponent } from '../../components/containers/card/feed-Item/feed-item.component';
import { TopMenuComponent } from '../../components/menu/top/top-menu.component';
import { IUserPropertiesModel } from '../../core/api/cadastro/cadastro.api.properties';
import { FeedWrapper } from './style';

export class FeedPageComponent extends Component {
    constructor(props: Component) {
        super(props);
        this.state = {
            loading: false,
            redirect: null,
            usersByRegion: [],
            pets: [],
        }
    }

    state: { loading: boolean; redirect: string | null; usersByRegion: IUserPropertiesModel[], pets: { idPet: number; nome: string }[] };

    render(): JSX.Element {

        const { loading, redirect, usersByRegion, pets } = this.state || {};

        return (
            <>
                <FeedWrapper>
                    <TopMenuComponent />

                    <div className='row'>
                        <div className='col-sm-8'>

                            { usersByRegion.map((user) => {

                                return user.pets.map((pet, index) => {
                                        return (
                                            <FeedItemComponent { ...{ ...pet, ...user } } key={index}/>
                                        )
                                })
                            })}
                        </div>
                        <div className='col-sm-4'></div>
                    </div>
                </FeedWrapper>
            </>
        )
    }
}