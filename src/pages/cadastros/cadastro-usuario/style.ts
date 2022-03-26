import styled from 'styled-components';

export const Container = styled.div`
    background-color: var(--primary);
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (max-width: 540px) {
        flex-direction: column;
    }
`;

export const Column = styled.div`
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;

    > text {
        font-family: 'Indie Flower', sans-serif;
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
        width: 200px;
        height: 188px;

    }

    @media (max-width: 540px) {
        width: 100%;
        margin-top: 2rem;

        > img {
            width: calc(200px / 2);
            height: calc(188px / 2);
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