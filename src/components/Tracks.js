import React, {useCallback} from 'react';

import "../../src/index"

const Tracks = (props) => {
   const addTrack = useCallback(
    () => {
        props.onAdd(props.tracks)
    }, [props.onAdd, props.tracks]);

    const removeTrack = useCallback(
        () => {
            props.onRemove(props.tracks)
        }, [props]
    );

    const renderAction = () => {
        if(props.isRemoval) {
          return (
            <button className="trackRemove" onClick={removeTrack}> 
             -
            </button>
          )
        }

        return (
            <button className="trackAdd" onClick={addTrack}>
                +
            </button>
        )

         
    };

    return (
        <div className="Tracks">
            <div className="track-Info">
                <h3> {props.track.name} </h3>
                <p> 
                 {props.tracks.artist} || {props.tracks.album}
                </p>
                {renderAction()}
            </div>
        </div>
    )


}

export default Tracks;