import { ICardProperties } from './card-properties.interface';
import styled from 'styled-components';

export const Container = styled.div`
    background-color: var(--secondary);
    border: ${ (props: ICardProperties) => props.border ? '1px solid #CCC' : 0 };
    padding: var(--padding-${ (props) => props.padding} );
    box-shadow: ${ (props: ICardProperties) => props.shadow ? '1px 4px 74px rgba(0, 0, 0, 0.15)' : 'none' };
    max-width: var(--card-size-${ (props) => props.size} );
    border-radius: 10px;
`;