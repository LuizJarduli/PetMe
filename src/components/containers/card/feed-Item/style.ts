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

export const FeedItemBody = styled.div`
    height: 443.82px;

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
        font-family: 'Noto Sans', 'Roboto' sans-serif;
        font-size: 20px;
        font-weight: bold;
        margin: 0 0 0 15px;
    }
`;