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

    @media (max-width: 540px) {
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

export const ForgetPasswordOption = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;

export const ForgetPasswordLabel = styled.p`
    font-weight: 500;
    font-size: 12px;
    line-height: 10px;
    border-bottom: 1px solid #000;
    width: 70%;
    text-align: center;
    padding: 10px;
    cursor: pointer;
`