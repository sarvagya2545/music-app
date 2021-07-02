import React from 'react';
import { CustomScrollBar, GlassContainer } from '../../styles/globalStyles';
import { PlaylistHeading, PlaylistBody } from './Playlist.elements';
import { useSelector } from 'react-redux';
import PlayListItem from './PlayListItem';

const PlayList = () => {
    const tracksList = useSelector(state => state.tracks.track.ids);

    return (
        <GlassContainer padding="1.5rem 3rem 3rem">
            <PlaylistHeading>Playing next:</PlaylistHeading>
            <CustomScrollBar>
                <PlaylistBody>
                    {tracksList.map((val) => (
                        <PlayListItem id={val} key={val}/>
                    ))}
                </PlaylistBody>
            </CustomScrollBar>
        </GlassContainer>
    );
}
 
export default PlayList;