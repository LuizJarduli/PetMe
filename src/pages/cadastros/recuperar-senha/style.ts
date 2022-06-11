import styled from 'styled-components';

export const Container = styled.div`

    background-color: var(--primary);
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 20px;

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

export const Column = styled.div`
    width: 50%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;

    > span {
        font-family: 'Signika Negative', sans-serif;
        font-style: normal;
        font-weight: 600;
        font-size: 110px;
        line-height: 136px;
        color: #000000;
    }
    
    > p {
        font-family: 'Noto Sans', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 33px;
        text-align: justify;
    }
    
    > img {
        width: 296px;
        height: 277px;
    }

    @media (max-width: 540px) {
        width: 100%;
        margin-top: 2rem;

        > img {
            width: calc(296px / 2);
            height: calc(277px / 2);
        }

        > p {
            display: none;
        }

        > span {
            font-size: 60px;
            line-height: 60px;
        }
    }
`;

