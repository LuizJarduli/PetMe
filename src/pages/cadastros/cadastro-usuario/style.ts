import styled from 'styled-components';

export const Container = styled.div`
    background-color: var(--primary);
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    > p {
        font-family: 'Indie Flower', sans-serif;
        font-style: normal;
        font-weight: 600;
        font-size: 80px;
        line-height: 50px;
        color: #000000;
    }

    > h1 {
        font-family: 'Indie Flower', sans-serif;
        font-style: normal;
        font-weight: 600;
        font-size: 80px;
        line-height: 50px;
        color: #000000;
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

        > span {
            font-size: 60px;
            line-height: 60px;
        }
    }

`;