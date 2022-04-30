import styled from 'styled-components';

export const Spinner = styled.div`
    border: 16px solid #f3f3f3;
    border-top: 16px solid #75AA62;
    border-radius: 50%;
    width: 120px;
    height: 120px;
    animation: spin 1s linear infinite;

    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
`;

export const LoadingWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
`;

export const Overlay = styled.div`
    position: fixed; /* Sit on top of the page content */
    display: block; /* Hidden by default */
    width: 100vw; /* Full width (cover the whole page) */
    height: 100vh; /* Full height (cover the whole page) */
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0,0,0,0.5); /* Black background with opacity */
    z-index: 2; /* Specify a stack order in case you're using a different order for other elements */
    cursor: pointer; /* Add a pointer on hover */
`;