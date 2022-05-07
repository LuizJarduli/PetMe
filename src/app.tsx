import { AppRoutes } from './routes';
import GlobalStyles from './styles/global';
import { ToastContainer } from 'react-toastify';    
import 'bootstrap/dist/css/bootstrap.css';
import 'react-toastify/dist/ReactToastify.css';

function App(): JSX.Element {
    return(
        <>
            <ToastContainer />
            <AppRoutes />
            <GlobalStyles />
        </>
    )
}

export default App