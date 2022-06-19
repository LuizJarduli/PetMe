import { Component } from 'react';
import { FormComponent } from '../../../form/form.component';
import { FileInputComponent } from '../../../form/inputs/file-cropped-input/file-input.component';
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
                            <FormComponent onFormSubmit={(event) => console.log(event.detail)}>
                                
                                <FileInputComponent name='fotoPet'/>
                                
                            </FormComponent>
                        </ul>    
                    </CadItemBody>

                    <CadItemFeet>
                        <LeftMenuContent>
                            <p>Contato: (xx)xxxxx-xxxx</p>
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