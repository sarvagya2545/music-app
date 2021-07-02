import React from 'react';
import { GlassContainer } from '../../styles/globalStyles';
import { MusicCardImage, MusicCardTitle } from './MusicCard.elements';
import { useSelector } from 'react-redux';
const fallBackImg = `/images/seth-doyle-wYrByI2RKx8-unsplash.jpeg`;

const MusicCard = () => {
    const img = useSelector(
        ({ tracks: { track, currentTrackIndex }  }) => track.byId[track.ids[currentTrackIndex]]?.img
    );

    const title = useSelector(
        ({ tracks: { track, currentTrackIndex } }) => {
            return track.byId[track.ids[currentTrackIndex]]?.name;
        }
    );

    return (
        <>
            <GlassContainer padding="1.5rem">
                <MusicCardImage src={img || fallBackImg}/>
                <MusicCardTitle>{title || "Click on the track to play it"}</MusicCardTitle>
            </GlassContainer>
        </>
    );
}
 
export default MusicCard;