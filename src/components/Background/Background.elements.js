import styled from 'styled-components';

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

export const MainContainer = styled.div`
    height: 100vh;
    width: 100vw;
    background: linear-gradient(to top left, var(--color-primary-1), var(--color-primary-2));
    position: relative;
    overflow: hidden;
    background-position: 50% 50%;

    &::before {
        --size: 90rem;
        --offset: 30rem;

        content: '';
        position: absolute;
        height: var(--size);
        width: var(--size);
        bottom: calc(-1 * var(--offset));
        right: calc(-1 * var(--offset));

        background: linear-gradient(to top left, var(--color-primary-3) 40%, var(--color-primary-2) 85%);
        filter: blur(20px);
        border-radius: 50%;
    }
`;