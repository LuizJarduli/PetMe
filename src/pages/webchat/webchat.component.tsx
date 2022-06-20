import { Component } from 'react';
import { toast } from 'react-toastify';
import { TopMenuComponent } from '../../components/menu/top/top-menu.component';
import { LoadingComponent } from '../../components/utility-components/loading.component';
import { userApi } from '../../core/api/cadastro/cadastro.api';
import { IUserPropertiesModel } from '../../core/api/cadastro/cadastro.api.properties';
import { StorageService } from '../../core/services/storageService';
import WebChat from './webchat-config.component';

export class WebChatComponent extends Component {
    constructor(props: Component) {
        super(props);
        this.state = {
            loading: false,
        }
    }

    state: { loading: boolean; user?: IUserPropertiesModel; };

    componentDidMount(): void {
        const { username, token } = StorageService.getInstance().getUser() || {};
        this.setState({ loading: true });
        userApi.get(username)
            .then((response) => this.setState({ user: response}))
            .catch((error) => toast.error(error))
            .finally(() => this.setState({ loading: false }))
    }

    render(): JSX.Element {
        const { loading, user } = this.state || {};

        return (
            <>
                <TopMenuComponent />
                { loading && (<LoadingComponent></LoadingComponent>) }
                <div>
                    <WebChat userId={user?.idUsuario?.toString()} />
                </div>
            </>
        )
    }
}