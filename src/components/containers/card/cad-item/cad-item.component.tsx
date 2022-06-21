import { Component } from 'react';
import { CadItemContainer, CadItemHeader, CadItemBody, CadItemFeet, UserProfile,
        RightMenuContent, LeftMenuContent} from './style';

export class CadItemComponent extends Component<any> {
    constructor(props: Component<any>) {
        super(props);
    }

    render(): JSX.Element {
        const { 
            nome,
            cidade,
            descricao,
            estado,
            fotoPet,
            numero,
        } = this.props?.petData || {};

        const {
            username,
            fotoPerfil,
            idUsuario,
        } = this.props?.userData || {};

        return (
            <>
                <CadItemContainer>
                    <CadItemHeader>
                        <UserProfile>
                            <img src={ fotoPerfil || '../../../assets/default/default-profile.png'} alt="Imagem de Perfil"/>
                        </UserProfile>
                    </CadItemHeader>
                    <CadItemBody>
                        <img src={ fotoPet || '../../../assets/default/default-profile.png'} alt="Imagem do pet"/>
                    </CadItemBody>
                    <CadItemFeet>
                        <LeftMenuContent>
                            <p>Contato: {numero} - {cidade}, {estado}</p>
                            <p>{nome}</p>
                            <p>{descricao}</p>
                        </LeftMenuContent>
                        <RightMenuContent>
                            <ul>
                                <li><button><img src="../../assets/icons/facebook.png" alt="Facebook" /></button></li>
                                <li><button><img src="../../assets/icons/instagram.png" alt="Instagram" /></button></li>
                                <li><button><img src="../../assets/icons/whatsapp.png" alt="whatsapp" /></button></li>
                            </ul>
                        </RightMenuContent>
                    </CadItemFeet>
                </CadItemContainer>
            </>

        )
    }
}