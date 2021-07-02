import styled from 'styled-components';
import { COLORS } from '../../styles/constants';

export const PlaylistHeading = styled.h1`
    color: ${COLORS.white()};
    font-weight: bold;
`;

export const PlaylistBody = styled.ul`
    height: 35rem;
    width: 40rem;
    list-style: none;
    margin-top: 1rem;
    overflow-y: scroll;
`;

export const PlaylistImg = styled.img`
    height: 5rem;
    width: 5rem;
    border-radius: 8px;
    object-fit: cover;
`;

export const PlaylistSongName = styled.p`
    font-size: 2rem;
    font-weight: bold;
    width: 100%;
    margin: 0 1rem;
`;

export const PlaylistSongLength = styled.p`
    font-size: 2rem;
    font-weight: bold;
`;

export const PlaylistItemContainer = styled.li`
    padding: 1rem;
    margin-right: 1.5rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

    &:not(:last-of-type) {
        border-bottom: 1px solid ${COLORS.white(0.5)};
    }

    &:hover {
        cursor: pointer;
        background: ${COLORS.white(0.3)};
    }
`;