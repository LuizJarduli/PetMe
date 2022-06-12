import { Component } from 'react';
import { CardComponent } from '../../../components/containers/card/card.component';
import { FormComponent } from '../../../components/form/form.component';
import { ButtonComponent } from '../../../components/buttons/button.component';
import { EmailInputComponent } from '../../../components/form/inputs/email-input/email-input.component';
import { Container, Separator, Box, Column } from './style';

/**
 * Pagina Recuperar Senha
 * @author Gustavo Cecato
 * @since 04/2022
 */

export class RecuperarSenhaComponent extends Component{

    constructor(props: typeof Component) {
        super(props);
    }

    private handleRecuperarFormSubmit(formData: any): void {
        console.log(formData); // TODO: criar rotina de login
    }

    /**
     * Chamado imediatamente após a montagem do componente.
     */
    componentDidMount(): void {
        document.addEventListener('onFormSubmit', (event) => {
            event.stopPropagation();
            this.handleRecuperarFormSubmit(event)
        });
    }

    /**
     * Chamado imediatamente após o componente ser destruído
     */
    componentWillUnmount(): void {
        document.removeEventListener('onFormSubmit', (event) => this.handleRecuperarFormSubmit(event));
    }

    render(): JSX.Element {
        return(
            <Container>
                <Column>
                    <img src="../../assets/logo/logo.png" alt="Logo"></img>
                    <span>Maskota</span>
                </Column>
                <Column>
                    <CardComponent shadow size='sm'>
                        <h2>Recuperar Senha</h2>
                        <FormComponent onFormSubmit={(event) => this.handleRecuperarFormSubmit(event.detail)}>
                            <EmailInputComponent
                                name='usarEmail'
                                placeholder='Email'
                                validate='required'
                            />

                            <ButtonComponent 
                                    name='confirmButton'
                                    label='Enviar'
                                    color='primary'/>

                        </FormComponent>

                        <Separator></Separator>

                        <Box>
                            <ButtonComponent 
                                name='backButton'
                                label='Criar Conta'
                                color='secondary'/>
                        </Box>

                    </CardComponent>
                </Column>       
            </Container>
        );
    }
}


