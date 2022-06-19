import styled from 'styled-components';

export const FeedItemContainer = styled.div`
    margin: 4.5rem 4rem 0 0;
    padding: 0;
    border-radius: 5px;
    border: 1px solid #CCC;
    width: 760px;
    height: 705px;
`

export const FeedItemHeader = styled.div`
    height: 90.33px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #FFFFFF;
    border: 1px solid rgba(142, 142, 142, 0.8);
    border-radius: 5px 5px 0px 0px;
`;

export const FeedItemBody = styled.button`
    height: 443.82px;
    width: 100%;

    :hover {
        cursor: pointer;
    }

    > img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

export const FeedItemFooter = styled.div`
    height: 170.85px;
    border: 1px solid rgba(142, 142, 142, 0.8);
    border-radius: 0px 0px 5px 5px;
`;

export const FeedItemHeaderUser = styled.div`
    display: flex;
    justify-content: start;
    align-items: center; 
    margin-left: 15px;
    padding: 0;

    > img {
        height: 4rem;
        width: 4rem;
        border-radius: 50%;
        border: 1px solid #CCC;
    }

    > p {
        white-space: nowrap;
        overflow: hidden;
        font-family: 'Noto Sans', 'Roboto' sans-serif;
        font-size: 20px;
        font-weight: bold;
        margin: 0 0 0 15px;
    }
`;

export const LikeContainer = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    margin: 0 0 0 15px;
    padding: 2px 0 2px 0;
    height: 2rem;

    > button {
        margin: 0;
        padding: 0;
    }

    > p {
        font-family: 'Noto Sans', 'Roboto' sans-serif;
        font-size: 15px;
        font-weight: bold;
        margin: 0 0 0 15px;
    }
`;

export const PetName = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 0.5rem 0 0.5rem 0;
    padding: 0;

    > p {
        white-space: nowrap;
        overflow: hidden;
        font-family: 'Noto Sans', 'Roboto' sans-serif;
        font-size: 15px;
        font-weight: normal;
        margin: 0 0 0 15px;
    }

    > p > span {
        font-size: 20px;
        font-weight: bold;
    }

    > div {
        margin: 0 15px 0 0;
    }

    > div > .user--contact:first-child {
        margin-right: 15px;
    }   
`;

export const DescriptionContainer = styled.div`
    margin: 0.5rem 0 0.5rem 0;
    padding: 0;

    > p {
        font-family: 'Noto Sans', 'Roboto' sans-serif;
        font-size: 15px;
        font-weight: normal;
        margin: 0 0 0 15px;
        white-space: nowrap;
        overflow: hidden;
    }
`;