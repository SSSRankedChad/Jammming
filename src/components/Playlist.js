import React, {useCallback} from 'react'

import "../../src/index.css"

import Tracklist from "../../src/components/Tracklist.js";

const Playlist = (props) => {

    const handleNameChange = useCallback(
        (e) => {
            props.onNameChange(e.target.value)
        }, [props]);

    return (
        <div className="Playlists">
            <input onChange={handleNameChange} defaultValue="Enter"/>
            <Tracklist
              track={props.playlistTracks}
              isRemoval={true}
              onRemove={props.onRemove}
            />

            <button className="PlaylistSave" onClick={props.onSave}>
             Save Playlist
            </button>
        </div>
    )
}

export default Playlist;