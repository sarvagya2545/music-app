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
        --color-primary-3: ${COLORS.primary3};

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

export const GlassContainer = styled.div`
    background: linear-gradient(
        to right bottom, var(--color-white-opaque), var(--color-white-lite)
    );
    padding: ${({ padding }) => padding || '3rem'};
    border-radius: 20px;
    border: 1px solid var(--color-white-lite);
    
    position: relative;
    height: ${({ height }) => height || 'fit-content'};
    width: ${({ width }) => width || 'fit-content'};
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    backdrop-filter: blur(15px);
    max-height: 45rem;
    overflow: scroll;
`;

export const CustomScrollBar = styled.div`
    & * {
        ::-webkit-scrollbar {
            width: .3rem;
        }
        
        ::-webkit-scrollbar-track {
            background-color: ${COLORS.white(0.4)};
        }
        
        ::-webkit-scrollbar-thumb {
            background-color: ${COLORS.white(1)};
            display: block;
            width: .5rem;
        }
    }
`;

export const AppLayout = styled.div`
    display: grid;
    width: max-content;
    place-content: center;
    align-items: stretch;
    gap: 10px;

    grid-template-areas: 
        'current playlist'
        'player player'
    ;
`;

export default GlobalStyle;