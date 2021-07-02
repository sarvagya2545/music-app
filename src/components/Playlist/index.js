import React from 'react';
import { CustomScrollBar, GlassContainer } from '../../styles/globalStyles';
import { PlaylistHeading, PlaylistBody } from './Playlist.elements';
import { useDispatch, useSelector } from 'react-redux';
import PlayListItem from './PlayListItem';
import { trackChanged } from '../../redux/trackSlice';

const PlayList = () => {
    const tracksList = useSelector(state => state.tracks.track.ids);
    const currentTrackId = useSelector(state => state.tracks.track.ids[state.tracks.currentTrackIndex]);
    const dispatch = useDispatch();

    const setTrack = (id) => {
        dispatch(trackChanged(id));
    }

    return (
        <GlassContainer padding="1.5rem 3rem 3rem">
            <PlaylistHeading>Playing next:</PlaylistHeading>
            <CustomScrollBar>
                <PlaylistBody>
                    {tracksList.map((id) => (
                        <PlayListItem id={id} key={id} onClick={() => setTrack(id)} isCurrent={currentTrackId === id}/>
                    ))}
                </PlaylistBody>
            </CustomScrollBar>
        </GlassContainer>
    );
}
 
export default PlayList;