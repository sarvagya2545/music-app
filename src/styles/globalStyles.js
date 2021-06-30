import styled, { createGlobalStyle } from 'styled-components';
import { COLORS } from './constants';

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    html {
        font-size: 62.5%;

        --color-primary-1: ${COLORS.primary1};
        --color-primary-2: ${COLORS.primary2};
        --color-white-lite: ${COLORS.white(0.2)};
        --color-white-opaque: ${COLORS.white(0.8)};

        --font-fam: 'Rubik', sans-serif;
        --root-font-size: 1.8rem;

        --gradient-border-dir: to right bottom;
        --gradient-border-col-1: ${COLORS.white(1)};
        --gradient-border-col-2: ${COLORS.white(0.2)};
    }

    body {
        font-size: var(--root-font-size);
        font-family: var(--font-fam);
        color: ${COLORS.white()};
    }
`;

export const MainContainer = styled.div`
    height: 100vh;
    width: 100vw;
    background: linear-gradient(to top left, var(--color-primary-1), var(--color-primary-2));
`;

export const GlassContainer = styled.div`

    background: linear-gradient(
        to right bottom, var(--color-white-opaque), var(--color-white-lite)
    );
    padding: ${({ padding }) => padding || '3rem'};
    border-radius: 30px;
    border: 1px solid var(--color-white-lite);
    
    position: relative;
    backdrop-filter: blur(50px);
    height: ${({ height }) => height || 'fit-content'};
    width: ${({ width }) => width || 'fit-content'};
`;

export const Bubble = styled.div`
    /* linear gradient */
    background: linear-gradient(
        to bottom, var(--color-white-opaque), var(--color-white-lite)
    );

    /* size related */
    width: ${({ size }) => size || '250px'};
    height: ${({ size }) => size || '250px'};
    border-radius: 50%;

    /* Position related props */
    position: absolute;
    top: ${({ top }) => top || 'none'};
    bottom: ${({ bottom }) => bottom || 'none'};
    left: ${({ left }) => left || 'none'};
    right: ${({ right }) => right || 'none'};
`;

export default GlobalStyle;