import { Component } from 'react';
import { Navigate } from 'react-router-dom';
import { MenuContainer, MenuContent } from './style';
/**
 * Menu fixo do App
 * @author Fã do Luiz Miguel
 * @since 06/2022
 */
export class BotMenuComponent extends Component {
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
                <MenuContent>
                    <ul>
                        <li><button onClick={() => this.handleNavigate('home')}><img src="../../assets/icons/Vectorhome.png" alt="Home" /></button></li>
                        <li><button onClick={() => this.handleNavigate('cadastrar-pet')}><img src="../../assets/icons/Vectoradd.png" alt="adicionar pet" /></button></li>
                        <li><button onClick={() => this.handleNavigate('chat')}><img src="../../assets/icons/Vectorchat.png" alt="chat" /></button></li>
                        <li><button onClick={() => this.handleNavigate('meu-perfil')}><img src="../../assets/icons/Vectormyprofile.png" alt="meu perfil" /></button></li>
                    </ul>
                </MenuContent>
            </MenuContainer>
        )
    }
}