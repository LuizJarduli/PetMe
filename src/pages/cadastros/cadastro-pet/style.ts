import styled from 'styled-components';

export const Container = styled.div`
    background-color: var(--primary);
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

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
        
        flex-direction: column;
    }
`;

export const Column = styled.div`
    width: 50%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;

    > p {
        font-family: 'Indie Flower', sans-serif;
        font-style: normal;
        font-weight: 600;
        font-size: 110px;
        line-height: 136px;
        color: #000000;
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
