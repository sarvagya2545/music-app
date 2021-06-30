import React, { useEffect, useRef, useState } from 'react';
import { GlassContainer } from '../../styles/globalStyles';
import { PlayerControls, ControlIcon, AudioTrack, Time, TotalTime } from './Player.elements';
import { FaPlay, FaPause, FaFastForward, FaFastBackward } from 'react-icons/fa';

const audioSrc = '/music/ATTACK ON TITAN - Full English Opening 1 (Guren No Yumiya) Cover by Jonathan Young feat.m4a';

const Player = () => {
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        // setIsPlaying(true);
        console.log(audioRef.current);
        if(audioRef) {
            if(isPlaying) {
                audioRef.current.play()
                    .then(_ => {
                        console.log('Player started');
                    })
                    .catch(err => console.log(err))
            } else {
                audioRef.current.pause()
            }
        };
    }, [isPlaying])

    const audioRef = useRef(new Audio(audioSrc));

    const togglePlay = () => setIsPlaying(s => !s);

    return (
        <GlassContainer padding="1rem 3rem" width="100%" style={{ gridArea: 'player' }}>
            <PlayerControls>
                <ControlIcon>
                    <FaFastBackward />
                </ControlIcon>
                <ControlIcon onClick={togglePlay}>
                    {!isPlaying ? <FaPlay /> : <FaPause />}
                </ControlIcon>
                <ControlIcon>
                    <FaFastForward />
                </ControlIcon>
            </PlayerControls>
            <AudioTrack progress="20" value="20"/>
            <Time>01:00<TotalTime> / 03:04</TotalTime></Time>
        </GlassContainer>
    );
}
 
export default Player;