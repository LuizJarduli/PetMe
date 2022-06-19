import styled from 'styled-components';

export const FeedWrapper = styled.div`
    margin: 0;
    padding: 0;

    > div.row {
        margin: 0;
        padding: 0 50px 0 50px;
        width: 98vw;
    }

    > div.row > div.col-sm-8 {

    }

    > div.row > div.col-sm-4 {
        margin-top: 4rem;
    }
`;

export const FeedItemSuggestions = styled.div`
    display: flex;
    justify-content: center;
    align-items: start;
    flex-direction: column;
    margin-left: 15px;
    padding: 0;

    > .userSuggested > button {
        display: flex;
        justify-content: start;
        align-items: center;
        flex-direction: row;
        margin: 0;
        padding: 0;
    }

    > .userSuggested > button > img {
        height: 2rem;
        width: 2rem;
        border-radius: 50%;
        border: 1px solid #CCC;
        object-fit: cover;
    }

    > .userSuggested > button > p {
        white-space: nowrap;
        overflow: hidden;
        font-family: 'Noto Sans', 'Roboto' sans-serif;
        font-size: 15px;
        font-weight: normal;
        margin: 0 0 0 15px;
    }

    > .title {
        white-space: nowrap;
        overflow: hidden;
        font-family: 'Noto Sans', 'Roboto' sans-serif;
        font-size: 18px;
        font-weight: bold;
        margin: 15px 0 15px 0;
    }
`;