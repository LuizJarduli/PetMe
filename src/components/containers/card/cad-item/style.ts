import styled from 'styled-components';

export const CadItemContainer = styled.div`
    
    margin: 0;
    padding: 0;
    border-radius: 5px;
    border: 1px solid #CCC;
    width: 580px;
    height: 600px;
    margin-left: 15px;
    background: var(--white);
    flex-direction: row;

    @media (max-width: 540px) {
        width: 100%;
        margin-right: 0.8em;
        margin-top: 60%;

    }
  
`

export const CadItemHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 10%;
    border-radius: 5px;
    border-bottom: 1px solid #CCC;
`

export const CadItemBody = styled.div`
    height: 60%;
    width: 95%;
    display: flex;
    margin: 3%;
    border-radius: 50px;
    border: 1px solid #CCC;

    > img{

        width: 90px;
        height: 90px;
        display: block;
        margin: auto;
        opacity: 0.2;

    }

    > p{
        ali
    }

`

export const CadItemFeet = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 20%;
    border-radius: 5px;
`

