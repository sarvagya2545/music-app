import styled, { createGlobalStyle } from 'styled-components';
import { COLORS } from './constants';

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    html {
        --color-primary-1: ${COLORS.primary1};
        --color-primary-2: ${COLORS.primary2};
    }
`;

export const Container = styled.div`
    height: 100vh;
    width: 100vw;
    background: linear-gradient(to top left, var(--color-primary-1), var(--color-primary-2));
`;

export default GlobalStyle;