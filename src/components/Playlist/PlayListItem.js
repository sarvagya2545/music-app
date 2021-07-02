import React from 'react';
import { useSelector } from 'react-redux';
import { PlaylistImg, PlaylistItemContainer, PlaylistSongLength, PlaylistSongName } from './Playlist.elements';

const PlayListItem = ({ id }) => {
    const name = useSelector(state => state.tracks.track.byId[id].name)
    const length = useSelector(state => state.tracks.track.byId[id].len)
    const img = useSelector(state => state.tracks.track.byId[id].img)

    return (
        <PlaylistItemContainer>
            <PlaylistImg src={img} alt="random img" />
            <PlaylistSongName>
                {name}
            </PlaylistSongName>
            <PlaylistSongLength>
                {length}
            </PlaylistSongLength>
        </PlaylistItemContainer>
    );
}
 
export default PlayListItem;