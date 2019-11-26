import React from 'react';

const ITuneDetails = (props) => {
    // debugger
    if (!props.itune) return null;
    return(
      <div>
        <div className="itune-wrapper">
            <h3 className="position">{props.position + 1}. "{props.itune["im:name"].label}" by {props.itune["im:artist"].label}</h3>
            <div className="player">
                <audio controls>
                    <source src={props.itune.link[1].attributes.href} type="audio/mpeg" />
                    Your Browser doesnt support audio.
                </audio>
            </div>
            <div className="chart-position">
                <p></p>
                <img src={props.itune["im:image"][2].label} />
            </div>
        </div>
    </div>
    )
}

export default ITuneDetails;
