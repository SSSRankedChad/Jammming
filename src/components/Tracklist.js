import React  from 'react';

import Tracks from "../../src/components/Tracks.js";

import '../../src/index.css'

const TrackList = (props) => {
    return (
        <div className='Tracklist'>
        {props.tracks && props.tracks.map(track => {
          return (
              <Tracks
              track={track}
              key={track.id}
              onAdd={props.onAdd}
              isRemoval={props.isRemoval}
              onRemove={props.onRemove}
               />
          );
      })}
  </div>
    )
}

export default TrackList;