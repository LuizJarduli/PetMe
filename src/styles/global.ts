import { createGlobalStyle } from 'styled-components';

/**
 * Estilos Globais do App
 */
export default createGlobalStyle`
    
    /**
    * Cores do App
    */
    :root {
        --primary: #FAFAFA;
        --secondary: #FFFFFE;
        --black: #000000;
        --green: #FFFFFE;
        --grey: #F2F2F3;
        --white: #FFFFFF;
        --red: #FF0000;
        --light-grey: #C2C2C2;
        --card-size-sm: 300px;
        --card-size-md: 430px;
        --card-size-xl: 800px;
        --padding-xs: 8px;
        --padding-sm: 16px;
        --padding-md: 24px;
        --padding-xl: 32px;
        --button-primary: #75AA62;
        --button-secondary: #636363;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body, #root {
        max-height: 100vh;
        max-width: 100vw;
        height: 100%;
        width: 100%;
    }

    *, button, input {
        border: 0;
        background: none;
        font-family: 'Noto Sans', Roboto, 'Helvetica Neue', Arial, sans-serif;
    }

    text {
        border: 0;
        background: none;
        font-family: 'Indie Flower', sans-serif;
    }

    body {
        background-color: var(--primary);
    }
`