import styled from 'styled-components';

export const MenuContainer = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    width: 100vw;
    height: 65px;
    background: var(--white);
    border-bottom: 1px solid rgba(142, 142, 142, 0.8);
    padding-left: 50px;
    padding-right: 50px;

    @media (max-width: 540px) {
        padding-left: 5px;
    }

`;

export const LeftMenuContent = styled.div`
    display: flex;
    justify: center;
    margin: 0;
    padding: 5px;

    > img {
        width: 60px;
        height: auto;
    };

    > p {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0;
        font-family: 'Signika Negative', sans-serif;
        font-style: normal;
        font-weight: 600;
        font-size: 30px;
        text-align: center;
        margin-left: 10px;
    }

    @media (max-width: 540px) {

    }
`;

export const RightMenuContent = styled.div`
    margin: 0;
    padding: 0;

    > ul {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        list-style: none;
        text-decoration: none; 
        margin: 0;
    }

    > ul > li {
        padding: 5px;
        margin-left: 7px;
        cursor: pointer;
    }

    > ul > li > button > img {
        width: 35px;
    }
`
