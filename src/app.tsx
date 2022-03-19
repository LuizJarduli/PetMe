import { AppRoutes } from './routes';
import 'bootstrap/dist/css/bootstrap.css';
import GlobalStyles from './styles/global';

function App(): JSX.Element {
    return(
        <>
            <AppRoutes />
            <GlobalStyles />
        </>
    )
}

export default App