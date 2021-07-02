import React, { useEffect, useRef, useState } from 'react';
import { GlassContainer } from '../../styles/globalStyles';
import { PlayerControls, ControlIcon, AudioTrack, Time, TotalTime } from './Player.elements';
import { FaPlay, FaPause, FaFastForward, FaFastBackward } from 'react-icons/fa';
import { useSelector } from 'react-redux';

const Player = () => {
    // audio src selected from the state
    const audioSrc = useSelector(
        ({ tracks: { track, currentTrackIndex } }) => track.byId[track.ids[currentTrackIndex]]?.src
    );

    // audio ref used to change the audio
    const audioRef = useRef(audioSrc ? new Audio(audioSrc) : null);
    // interval ref used to control the timer component
    const intervalRef = useRef();

    // state of the player
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTrack, setCurrentTrack] = useState(0);
    const [trackLength, setTrackLength] = useState(100);

    // change audio when track changed
    useEffect(() => {
        audioRef.current = new Audio(audioSrc);
        audioRef.current?.addEventListener('loadedmetadata', e => {
            setTrackLength(audioRef.current.duration);
        })
    }, [audioSrc]);

    // start timer 
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

    // pause/play logic
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

    // show time in correct format
    const convertTime = (seconds) => {
        return `${Math.floor(seconds / 60)}:${
            Math.ceil(seconds % 60).toLocaleString('en-US', {
                minimumIntegerDigits: 2
            })
        }`;
    }

    // toggle play/pause
    const togglePlay = () => setIsPlaying(s => !s);
    
    // when user is sliding the slider
    const onScrub = (e) => {
        clearInterval(intervalRef.current);
        audioRef.current.currentTime = e.target.value;
        setCurrentTrack(e.target.value);
    }

    // when user stops sliding the slider
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
            <AudioTrack 
                progress={currentTrack / trackLength * 100}
                value={currentTrack} min="0" max={trackLength}
                onChange={onScrub}
                onMouseUp={onScrubEnd}
                onKeyUp={onScrubEnd}
            />
            <Time>{convertTime(currentTrack)}<TotalTime> / {convertTime(trackLength)}</TotalTime></Time>
        </GlassContainer>
    );
}
 
export default Player;