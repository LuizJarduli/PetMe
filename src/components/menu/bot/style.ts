import styled from 'styled-components';

export const MenuContainer = styled.nav`
    display:none;	
    position:fixed;
	bottom:0;
	left:0;
	right:0;
	z-index:1000;
    will-change:transform;
	transform: translateZ(0);
	height:60px;
    border-top: 1px solid rgba(142, 142, 142, 0.8);
	background: var(--white);

    @media (max-width: 540px) {
        display: flex;
    }

`;

export const MenuContent = styled.div`
    
    margin: 0;
    padding: 0;
    display: none;
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
        padding: 20px;
        margin-left: 7px;
        cursor: pointer;
    }

    > ul > li > button > img {
        width: 35px;
    }

    @media (max-width: 540px) {
        display: flex;
    }
`
