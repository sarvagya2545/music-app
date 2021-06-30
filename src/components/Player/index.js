import React from 'react';
import { GlassContainer } from '../../styles/globalStyles';
import { PlayerControls, ControlIcon, AudioTrack } from './Player.elements';
import { FaPlay, FaPause, FaFastForward, FaFastBackward } from 'react-icons/fa';

const Player = () => {
    return (
        <GlassContainer padding="1rem 3rem" width="80rem">
            <PlayerControls>
                <ControlIcon>
                    <FaFastBackward />
                </ControlIcon>
                <ControlIcon>
                    {<FaPlay /> || <FaPause />}
                </ControlIcon>
                <ControlIcon>
                    <FaFastForward />
                </ControlIcon>
            </PlayerControls>
            <AudioTrack progress="20"/>
        </GlassContainer>
    );
}
 
export default Player;