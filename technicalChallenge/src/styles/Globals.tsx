import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        font-family: 'Roboto', Helvetica, sans-serif;
        background-color: #1B1818;
        color: ${theme.colors.white};
    }
`;
