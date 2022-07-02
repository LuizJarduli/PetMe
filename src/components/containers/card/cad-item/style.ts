import styled from 'styled-components';

export const CadItemContainer = styled.div`
    
    border-radius: 5px;
    border: 1px solid #CCC;
    width: 580px;
    height: 600px;
    background: var(--white);
    flex-direction: row;
    margin-left: 2em;

    @media (max-width: 540px) {
        width: 100%;
        flex-direction: column;
        margin-left: 0px;
        height: 490px;

    }
  
`

export const CadItemHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 10%;
    border-bottom: 1px solid #CCC;
    margin-bottom: 15px;
    
`

export const CadItemBody = styled.div`
    height: 60%;
    width: 95%;
    display: flex;
    margin: 3%;
    border-radius: 50px;
    border: 1px solid #CCC;

    > ul{
        width: 90px;
        height: 90px;
        display: block;
        margin: auto;
        opacity: 1;
        border-radius: 50%;
        border: 2px solid #CCC;
    }

    > ul > p{
        position: relative;
        top: 50%;
        right: 13px;
        width: 50px;
        height: 2px;
        border: 1px solid #CCC;
        display: block;
        transform-origin: center;
    }

    > ul > p > span{

        width: 45px;
        height: 2px;
        border: 1px solid #CCC;
        display: block;
        background:#CCC;
        transform-origin: center;
        transform: rotate(90deg);
    }

    @media (max-width: 540px) {
        width: 100%;
        margin: 0;
        border-radius: 20px;
        border-left: 0px;
        border-right: 0px;
        border-top: 2px solid #CCC;
        border-bottom: 2px solid #CCC;

    }

`

export const CadItemFeet = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 20%;

`

export const UserProfile = styled.div`

    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-left: 20px;

    >img{
        width: 100%;
        height: 100%;
        border-radius: 50%;
    }

    @media(max-width: 540px) {
        width: 30px;
        height: 30px;

    }


`

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
        margin-right: 20px;
        margin-bottom: 90px;
    }

    > ul > li {
        padding: 5px;
        margin-left: 7px;
        cursor: pointer;
    }

    > ul > li > button > img {
        width: 35px;
    }

    @media (max-width: 540px) {
        margin-top: 40px;
        
        > ul {

        }
    
        > ul > li {

        }
    
        > ul > li > button > img {
            
        }
    }
`

export const LeftMenuContent = styled.div`
    display: flex;
    justify: center;
    margin: 0;
    padding: 5px;

    > p {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0;
        font-family: 'Noto Sans', Roboto, 'Helvetica Neue', Arial, sans-serif;
        font-style: normal;
        font-weight: 0;
        font-size: 20px;
        text-align: center;
        margin-left: 15px;
        margin-bottom: 80px;
        opacity: 0.7;
    }

    @media (max-width: 540px){
        >p{
            margin-top: 15px;
            margin-left: 0px;
            font-size: calc(20px/1.2);
        }
    }

`;