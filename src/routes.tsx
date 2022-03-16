import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LoginPageComponent } from './pages/auth/login-page.component';

/**
 * Todas as rotas do projeto passarão por aqui
 * @example TODO: criar exemplo
 * 
 * @see https://reactrouter.com/docs/en/v6/getting-started/tutorial
 */
export function AppRoutes(): JSX.Element {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<LoginPageComponent />}></Route>
            </Routes>
        </Router>
    )
} 