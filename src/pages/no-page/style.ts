import styled from 'styled-components';

export const Container = styled.div`
    background-color: var(--primary);
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    > img {
        width: 300px;
        height: 226px;
        padding-top: 2em;
    }

    @media (max-width: 580px) {
        flex-direction: column;

    }
`;

export const Text = styled.div`

    font-family: 'Indie Flower', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 85px;
    line-height: 80px;
    color: var(--black);
    text-align: center;

    > h1 {
        font-family: 'Indie Flower', sans-serif;
        font-size: 160px;
        text-align: center;
        
    }

    @media (max-width: 580px) {

        > h1 {
            font-size: calc(200px / 2);
        }
    }

    @media (max-width: 660px) {

        font-size: calc(100px / 2);
        margin-left: 2em;
        margin-right: 2em;

    }

    @media (max-width: 360px) {

        font-size: calc(100px / 2);
        margin-left: 1.5em;
        margin-right: 1em;

    }

`;
