import SendBirdApp from '@sendbird/uikit-react/App';
import SendbirdProvider from "@sendbird/uikit-react/SendbirdProvider";
// import withSendbird from "@sendbird/uikit-react/withSendbird";
import { WebChatContainer } from './style';
import '../../../node_modules/@sendbird/uikit-react/dist/index.css';

export default function WebChat(props) {
    return (
        <WebChatContainer>
            <SendBirdApp
                appId={'F598C1EF-B8C3-4311-94DE-57F4C7E619A9'}
                userId={props.userId} />   
        </WebChatContainer>
    );
}