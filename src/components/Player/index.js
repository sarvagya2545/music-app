import React, { useEffect, useRef, useState } from 'react';
import { GlassContainer } from '../../styles/globalStyles';
import { PlayerControls, ControlIcon, AudioTrack, Time, TotalTime } from './Player.elements';
import { FaPlay, FaPause, FaFastForward, FaFastBackward } from 'react-icons/fa';
import { useSelector } from 'react-redux';

const Player = () => {
    const audioSrc = useSelector(
        ({ tracks: { track, currentTrackIndex } }) => track.byId[track.ids[currentTrackIndex]]?.src
    );
    const audioRef = useRef(audioSrc ? new Audio(audioSrc) : null);
    const intervalRef = useRef();

    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTrack, setCurrentTrack] = useState(0);
    const [trackLength, setTrackLength] = useState(100);

    useEffect(() => {
        audioRef.current = new Audio(audioSrc);
        audioRef.current?.addEventListener('loadedmetadata', e => {
            setTrackLength(audioRef.current.duration);
        })
    }, [audioSrc]);

    const startTimer = () => {
        clearInterval(intervalRef.current);

        intervalRef.current = setInterval(() => {
            if (audioRef.current.ended) {
                // toNextTrack();
                clearInterval(intervalRef.current);
                setIsPlaying(false);
                // console.log('Ended');
            } else {
                setCurrentTrack(audioRef.current.currentTime);
                // console.log(audioRef.current.currentTime);
            }
        }, 1000);
    }

    useEffect(() => {
        if(audioRef.current) {
            if(isPlaying) {
                audioRef.current.play()
                    .then(_ => {
                        console.log('Player started');
                    })
                    .catch(err => console.log(err))
                ;

                startTimer();
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
    
    const onScrub = (e) => {
        clearInterval(intervalRef.current);
        audioRef.current.currentTime = e.target.value;
        setCurrentTrack(e.target.value);
    }

    const onScrubEnd = () => {
        if(!isPlaying) {
            setIsPlaying(true)
        }
        startTimer();
    }

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
            <AudioTrack progress={currentTrack / trackLength * 100} value={currentTrack} min="0" max={trackLength} onChange={onScrub} onMouseUp={onScrubEnd} onKeyUp={onScrubEnd}/>
            <Time>{convertTime(currentTrack)}<TotalTime> / {convertTime(trackLength)}</TotalTime></Time>
        </GlassContainer>
    );
}
 
export default Player;