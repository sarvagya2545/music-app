import styled from 'styled-components';

export const MusicCardImage = styled.img`
    --size: 30rem;

    width: var(--size);
    height: var(--size);

    border-radius: 20px;
    border: 1px solid white;
`;

export const MusicCardTitle = styled.h2`
    font-weight: bold;

    --size: 30rem;
    max-width: var(--size);
    
    text-align: center;
    margin-top: 1rem;

    word-break: break-word;
`;