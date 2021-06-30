import React from 'react';
import { GlassContainer } from '../../styles/globalStyles';
import { MusicCardImage, MusicCardTitle } from './MusicCard.elements';

const MusicCard = () => {
    return (
        <>
            <GlassContainer padding="1.5rem">
                <MusicCardImage src="https://picsum.photos/200/400"/>
                <MusicCardTitle>I can't feel my face - The Weeknd</MusicCardTitle>
            </GlassContainer>
        </>
    );
}
 
export default MusicCard;