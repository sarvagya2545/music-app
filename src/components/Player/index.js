import React, { useEffect, useRef, useState } from 'react';
import { GlassContainer } from '../../styles/globalStyles';
import { PlayerControls, ControlIcon, AudioTrack, Time, TotalTime } from './Player.elements';
import { FaPlay, FaPause, FaFastForward, FaFastBackward } from 'react-icons/fa';

const audioSrc = '/music/Bring Me To Life - Evanescence (Cover by Jonathan Young).m4a';

const Player = () => {
    const audioRef = useRef(new Audio(audioSrc));
    const intervalRef = useRef();

    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTrack, setCurrentTrack] = useState(0);
    const [trackLength, setTrackLength] = useState(100);

    audioRef.current.addEventListener('loadedmetadata', e => {
        setTrackLength(audioRef.current.duration);
    })

    useEffect(() => {
        if(audioRef) {
            if(isPlaying) {
                audioRef.current.play()
                    .then(_ => {
                        console.log('Player started');
                    })
                    .catch(err => console.log(err))
                ;

                intervalRef.current = setInterval(() => {
                    if (audioRef.current.ended) {
                        // toNextTrack();
                        clearInterval(intervalRef.current);
                        // console.log('Ended');
                    } else {
                        setCurrentTrack(audioRef.current.currentTime);
                        // console.log(audioRef.current.currentTime);
                    }
                }, 1000);

            } else {
                audioRef.current.pause()
                clearInterval(intervalRef.current);
            }
        };
    }, [isPlaying]);

    const convertTime = (seconds) => {
        return `${Math.floor(seconds / 60)}:${
            Math.ceil(seconds % 60).toLocaleString('en-US', {
                minimumIntegerDigits: 2
            })
        }`;
    }

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
            <AudioTrack progress={currentTrack / trackLength * 100} value={currentTrack} min="0" max={trackLength}/>
            <Time>{convertTime(currentTrack)}<TotalTime> / {convertTime(trackLength)}</TotalTime></Time>
        </GlassContainer>
    );
}
 
export default Player;