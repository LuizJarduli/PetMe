import { Component } from 'react';
import { Navigate } from 'react-router-dom';
import { FeedItemComponent } from '../../components/containers/card/feed-Item/feed-item.component';
import { TopMenuComponent } from '../../components/menu/top/top-menu.component';
import { LoadingComponent } from '../../components/utility-components/loading.component';
import { IUserPropertiesModel } from '../../core/api/cadastro/cadastro.api.properties';
import { FeedWrapper } from './style';
import StickyBox from 'react-sticky-box';
import { FeedApi } from '../../core/api/feed/feed.api';
import { toast } from 'react-toastify';

export class FeedPageComponent extends Component {
    constructor(props: Component) {
        super(props);
        this.state = {
            loading: false,
            redirect: null,
            pets: [],
        }
    }

    state: { loading: boolean; redirect: string | null; pets: any[] };
    
    componentDidMount(): void {
        this.setState({ loading: true });
        FeedApi.getList()
            .then((response) => this.setState({pets: [ ...response]}))
            .catch((error) => toast.error(error))
            .finally(() => this.setState({ loading: false }));
    }

    render(): JSX.Element {
        const { loading, pets } = this.state || {};

        return (
            <>
                <FeedWrapper>
                    <TopMenuComponent />

                    <div className='row'>
                        <div className='col-sm-8'>
                            <StickyBox>
                                {
                                    pets.map((pet, index) => {
                                        return (
                                            <FeedItemComponent item={pet} key={index}/>
                                        )
                                    })
                                }
                            </StickyBox>
                        </div>
                        <div className='col-sm-4'></div>
                    </div>
                </FeedWrapper>
                { this.state?.redirect && <Navigate to={this.state.redirect} />}
                { loading && (<LoadingComponent></LoadingComponent>) }
            </>
        )
    }
}