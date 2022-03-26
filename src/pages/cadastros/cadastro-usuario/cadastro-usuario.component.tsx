import { Component, ReactNode } from 'react';
import { CardComponent } from '../../../components/containers/card/card.component';
import { Column, Container } from './style';

/**
 * Pagina Cadastro Usuario
 * @author Gustavo Cecato
 * @since 03/2022
 */
export class CadastroUsuarioComponent extends Component {
    render(): ReactNode {
        return(
            <><Container>
                    <Column>
                        <img src="../../assets/logo/logo.png" alt="Logo"></img>
                        <text>Miclaa</text>
                        <CardComponent shadow size='sm'>
                            <h1>Cadastre-se</h1>
                            <br/>Nome de Usuario
                            <br/>Email
                            <br/>Senha
                            <br/>CPF
                            <br/>Li e concordo com os Termos.*
                            <br/> Cadastrar
                            <br/> Já tem uma conta?
                            <p>Já tem uma conta?</p>
                        </CardComponent>   
                    </Column>     
            </Container></>
        );
    }
}