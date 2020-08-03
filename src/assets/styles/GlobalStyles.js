import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    ::selection {
    background: ${props => props.theme.colors.red};
    }



    html {
        scroll-behavior: smooth;
        font-size: 62.5%;

        @media only screen and (max-width: 75em) {
            font-size: 56.25%;
        }

        @media only screen and (max-width: 56.25em) {
            font-size: 50%;
        }

    body {
        font-size: 1.6rem;
        font-family: "Poppins";
        font-weight: 400;
        line-height: 1.6;
    }

    button {
        padding: 0;
        cursor: pointer;
        outline: none;
        border: none;
    }

    ul, li {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    a {
        color: inherit;
        text-decoration: inherit;
    }

    h2 {
        font-size: 5rem;
        font-weight: 700;
        line-height: 1.4;
        color: ${props => props.theme.colors.darkBlue};
    }

    h3 {
        font-size: 2.2rem;
        font-weight: 600;
        color: ${props => props.theme.colors.lightBlue};
        padding: 3rem 0;
    }

    p {
        font-size: 1.8rem;
        font-weight: 600;
        line-height: 1.9;
    }

    h3 {
        font-size: 2.2rem;
        font-weight: 400;
        color: ${props => props.theme.colors.lightBlue};
    }
`

export default GlobalStyles
