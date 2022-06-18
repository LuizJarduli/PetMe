import { Component } from 'react';
import { CadItemContainer, CadItemHeader, CadItemBody, CadItemFeet} from './style';

export class CadItemComponent extends Component{
    constructor(props:Component) {
        super(props);
    }

    render(): JSX.Element {
        return (
            <CadItemContainer>

                <CadItemHeader>
                </CadItemHeader>

                <CadItemBody>
                    <img src="../../assets/icons/Vectoradd.png" alt="Logo"></img>
                </CadItemBody>

                <CadItemFeet>
                </CadItemFeet>

            </CadItemContainer>
        )
    }
}