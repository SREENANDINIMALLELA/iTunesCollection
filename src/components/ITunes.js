import React from 'react';
import ITuneDetails from './ITuneDetails';

class ITunes extends React.Component {
    render(){
        const songs = this.props.musicChart.map((song, index) => {
            return (
                <ITuneDetails itune={song} key={index} position={index} />
            );
        });

        return(
            <div className="song-list">
                {songs}
            </div>
        )
    }
}

export default ITunes;
