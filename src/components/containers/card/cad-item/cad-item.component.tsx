import { Component } from 'react';
import { CadItemContainer, CadItemHeader, CadItemBody, CadItemFeet, UserProfile,
        RightMenuContent, LeftMenuContent} from './style';

export class CadItemComponent extends Component{
    constructor(props:Component) {
        super(props);
    }

    render(): JSX.Element {
        return (
            <>
                <CadItemContainer>
            
                    <CadItemHeader>
                        <UserProfile>
                            <img src='../../../assets/default/default-profile.png' alt="Imagem de Perfil"/>
                        </UserProfile>
                    </CadItemHeader>

                    <CadItemBody>
                        <ul>
                            <p><span></span></p>
                        </ul>
                    </CadItemBody>

                    <CadItemFeet>
                        <LeftMenuContent>
                            <p>Contato:</p>
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