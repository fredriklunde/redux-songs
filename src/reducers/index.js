import { combineReducers } from 'redux'

const songsReducer = () => {
    return [
        {title: 'No Scrubs', duration: '505'},
        {title: 'Song no 5', duration: '4:05'},
        {title: 'Twilight of the thunder god', duration: '3:05'},
        {title: 'Vandraren', duration: '2:05'},
        {title: 'Faster, Harder, Scooter', duration: '1:05'}
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