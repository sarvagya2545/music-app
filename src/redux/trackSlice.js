import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    currentTrackIndex: null,
    track: {
        byId: {},
        ids: []
    }
};

const trackSlice = createSlice({
    name: 'track',
    initialState,
    reducers: {
        tracksLoaded(state, action) {
            action.payload.forEach(track => {
                state.track.byId[track.id] = track;
                state.track.ids.push(track.id);
            })
        },
        trackChanged(state, action) {
            state.currentTrackIndex = state.track.ids.indexOf(action.payload);
        },
        trackStopped(state, action) {
            state.currentTrack = null;
        },
        nextTrack(state) {
            state.currentTrackIndex = (state.currentTrackIndex + 1) % state.track.ids.length;
        },
        prevTrack(state) {
            if(state.currentTrackIndex !== 0) state.currentTrackIndex--;
            else state.currentTrackIndex = state.track.ids.length - 1;
        }
    }
})

export const { tracksLoaded, trackChanged, trackStopped } = trackSlice.actions;

export default trackSlice.reducer;