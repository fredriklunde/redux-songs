import { combineReducers } from 'redux'

const songsReducer = () => {
    return [
        {title: 'No Scrubs', duration: '505'},
        {title: 'Song 1', duration: '4:05'},
        {title: 'No 4', duration: '3:05'},
        {title: 'No 5', duration: '2:05'},
        {title: 'No 5', duration: '1:05'}
    ];
};

const selectedSongReducer = ( selectedSong = null, action) => {
    if(action.type === 'SONG_SELECTED'){
        return action.payload;
    }

    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
})