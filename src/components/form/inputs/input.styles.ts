import styled from 'styled-components';

export const InputContainer = styled.div`
    > input {
        border: 1px solid rgba(142, 142, 142, 0.8);
        box-sizing: border-box;
        border-radius: 10px;
        width: 100%;
        height: 45px;
        line-height: 2rem;
        padding: 0 5px;
        outline: 0;
        margin-bottom: 10px;
    }

`;

export const InputErrorMessage = styled.p`
    color: var(--red);
    font-size: 9px;
    text-align: left;
    margin-top: 1rem;
    margin-bottom: 1rem;
`;