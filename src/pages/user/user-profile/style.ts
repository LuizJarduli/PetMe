import styled from 'styled-components';

export const UserProfileInfo = styled.div`
    height: 300px;
    width: 100vw;
    margin: 0;
    padding-left: 50px;
    padding-right: 50px;
    padding-top: 65px;
    display: flex;
    align-items: center;

    @media (max-width: 540px) {
        flex-direction: column;
    }
`;

export const UserProfilePicture = styled.div`
    width: 200px;
    padding: 10px;
    margin: 0;

    > img {
        width: 180px;
        height: 180px;
        border-radius: 50%;
        object-fit: cover;

    }
`;

export const UserProfileData = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    width: 500px;
    height: 100%;
    padding: 10px;
    margin: 2rem 0 0 0;

    > h3 {
        margin: 0 20px 0 0;
        padding: 0;
        text-align: center;
    }

    > .buttons--container{
        display: flex;
        flex: direction: row;
        width: 100%;
        justify-content: space-between;
    }

    > .buttons--container > .buttons--margin {
        margin: 0 15px 0 0;
    }

    > p {
        font-family: 'Noto Sans', 'Roboto', sans-serif;
        font-size: 17px;
    }

    > p > span {
        font-weight: bold;
    }
`;

export const UserPetsList = styled.div`
    width: 100vw;
    margin: 0;
    padding: 50px;
    
    @media (max-width: 540px){
        padding: 30px;
    }

`;

export const PetContainer = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    height: auto;
    margin-top: 2rem; 


    > img {
        width: calc(105vw / 3.6);
        height: 250px;
        border-radius: 5px;
        object-fit: cover;
    }

    > h5 {
        text-align: left;
        padding: 5px;
        font-family: 'Signika Negative', sans-serif;
    }

    @media (max-width: 540px) {
        margin-top: 10rem;
        margin-bottom: 1.5em;
        > img {
            width: calc(85vw);
        }
    }

    > .pet-buttons--container {
        margin-top: 1rem;
        display: flex;
        flex-direction: row;
        width: 98%;
    }

    > .pet-buttons--container > .buttons--margin {
        margin: 0 15px 0 0;
    }
`;