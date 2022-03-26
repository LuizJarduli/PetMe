import { Component, ReactNode } from 'react';
import { Container, Text } from './style';

export class NoPageComponent extends Component {
    render(): ReactNode {
        return(
            <>
                <Container>

                    <Text>
                        <h1>404</h1>
                        Page Not Found :(
                    </Text>

                    <img src="../../assets/default/cat-typing.png" alt="cat"></img>

                </Container>
                
            </>

        );
    }
}