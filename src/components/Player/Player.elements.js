import styled from 'styled-components';
import { COLORS } from '../../styles/constants';

export const PlayerControls = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ControlIcon = styled.div`
    padding: 1rem;
    display: grid;
    place-items: center;

    &:hover {
        cursor: pointer;
        background-color: ${COLORS.white(0.4)};
    }
`;

export const AudioTrack = styled.input.attrs({
    type: 'range'
})`
    height: 5px;
    -webkit-appearance: none;
    width: 100%;
    margin: 10px 0;
    border-radius: 8px;
    background: ${({ progress }) => 
        `linear-gradient(to right, ${COLORS.white(1)} ${progress}%, ${COLORS.white(0.4)} ${progress}%)`
    };
    cursor: pointer;
`;