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
    }
`;

export const UserProfileData = styled.div`
    padding: 10px;
`;

export const UserPetsList = styled.div`
    width: 100vw;
    margin: 0;
    padding: 50px;
`;

export const PetContainer = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    width: 30%;
    height: auto;

    > img {
        width: calc(100vw / 3.6);
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
        > img {
            width: calc(80vw);
        }
    }
`;