import React from 'react';
import { connect } from 'react-redux';

class SongList extends React.Component {
    render() {
        console.log(this.props.songs);
        return (
            <div>
                Song List
                {this.props.songs[0].title}
            </div>
        )
    };
};

const mapStateToProps = (state) => {
    return {
        songs: state.songs  
    };
};

export default connect(mapStateToProps)(SongList);
