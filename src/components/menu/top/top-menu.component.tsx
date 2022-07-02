import { Component } from 'react';
import { Navigate } from 'react-router-dom';
import { LeftMenuContent, MenuContainer, RightMenuContent} from './style';

/**
 * Menu fixo do App
 * @author Luiz Miguel
 * @since 05/2022
 */
export class TopMenuComponent extends Component {
    constructor(props: Component) {
        super(props);
    }

    state: { redirect: null };

    /**
     * Trata os redirecionamentos da página com a rota informada
     * @param route rota a ser redirecionada
     */
    private handleNavigate = (route: string): void => {
        if (!window.location.href?.split('/')?.includes(route)) {
            this.setState({ redirect: route});
        }
    }

    /**
     * Renderiza os elementos da página
     */
    render(): JSX.Element {
        return(
            <MenuContainer>
                { this.state?.redirect && <Navigate to={`/${this.state.redirect}`} />}
                <LeftMenuContent>
                    <img src="../../assets/logo/logo.png" alt="Logo Maskota" />
                    <p>Maskota</p>
                </LeftMenuContent>
                <RightMenuContent>
                    <ul>
                        <li><button onClick={() => this.handleNavigate('home')}><img src="../../assets/icons/Vectorhome.png" alt="Home" /></button></li>
                        <li><button onClick={() => this.handleNavigate('cadastro-pet')}><img src="../../assets/icons/Vectoradd.png" alt="adicionar pet" /></button></li>
                        <li><button onClick={() => this.handleNavigate('chat')}><img src="../../assets/icons/Vectorchat.png" alt="chat" /></button></li>
                        <li><button onClick={() => this.handleNavigate('meu-perfil')}><img src="../../assets/icons/Vectormyprofile.png" alt="meu perfil" /></button></li>
                    </ul>
                </RightMenuContent>
            </MenuContainer>
        )
    }
}