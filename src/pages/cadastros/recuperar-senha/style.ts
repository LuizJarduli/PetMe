import styled from 'styled-components';

export const Container = styled.div`

    background-color: var(--primary);
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    > text {
        font-family: 'Indie Flower', sans-serif;
        font-style: normal;
        font-weight: 600;
        font-size: 80px;
        line-height: 50px;
        color: var(--black);
    }

    > img {
        width: 160px;
        height: 148px;
        margin-bottom: 1em;
    }

    @media (max-width: 540px) {

        > img {
            width: calc(160px / 1.2);
            height: calc(148px / 1.2);
        }

        > text {
            font-size: calc(80px;/ 1.2);
        }
    }

`;

export const Separator = styled.div `

    width: 248px;
    height: 0px;
    border-top: 2px solid rgba(0, 0, 0, 0.4);
    padding: 5px;
    margin-left: 3px;
    display: flex;
    flex-direction: column;

`;

export const Box = styled.div`

    border: 0px solid black;
    width: 200px;
    height: 50px;
    margin-left: 28px;

`;

