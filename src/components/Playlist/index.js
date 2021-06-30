import React from 'react';
import { CustomScrollBar, GlassContainer } from '../../styles/globalStyles';
import { PlaylistHeading, PlaylistBody, PlaylistItem, PlaylistImg, PlaylistSongName, PlaylistSongLength } from './Playlist.elements';

const PlayList = () => {
    return (
        <GlassContainer padding="1.5rem 3rem 3rem">
            <PlaylistHeading>Playing next:</PlaylistHeading>
            <CustomScrollBar>
                <PlaylistBody>
                    {([1,2,3,4,5,6,7,8]).map((val) => (
                        <PlaylistItem key={val}>
                            <PlaylistImg src="https://picsum.photos/200" alt="random img" />
                            <PlaylistSongName>
                                Song Name
                            </PlaylistSongName>
                            <PlaylistSongLength>
                                03:04
                            </PlaylistSongLength>
                        </PlaylistItem>
                    ))}
                </PlaylistBody>
            </CustomScrollBar>
        </GlassContainer>
    );
}
 
export default PlayList;