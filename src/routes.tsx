import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LoginPageComponent } from './pages/auth/login-page.component';
import { CadastroUsuarioComponent } from './pages/cadastros/cadastro-usuario/cadastro-usuario.component';
import { NoPageComponent } from './pages/no-page/no-page.component';

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
                <Route path='cadastro' element={<CadastroUsuarioComponent />}></Route>

                <Route path='*' element={<NoPageComponent />}></Route>
            </Routes>
        </Router>
    )
} 