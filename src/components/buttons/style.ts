import { IButtonProperties } from './button-properties.interface';
import styled from 'styled-components';

export const StyledButton = styled.button`
    background: ${ (props: IButtonProperties) => props.class ? `var(--button-${props.class})` : 'linear-gradient(180deg, #75AA62 0%, #75AA62 100%);'};
    color: var(--white);
    box-sizing: border-box;
    border-radius: 10px;
    width: 100%;
    height: 45px;
    line-height: 2rem;
    padding: 0 5px;
    outline: 0;
    margin-bottom: 10px;
`;