import {React, useState, useCallback, useEffect} from 'react'
import Playlist from "../../src/components/Playlist.js"
import SearchResults from "../../src/components/SearchResults.js"
import Spotify from "../../src/components/requests.js"
import SearchBar from "../../src/components/SearchBar.js"
import Sidebar from './Sidebar.js'
import "../../src/index.css"
import { helix} from 'ldrs'

helix.register();

const Jammming = () => {
    const [searchResults, setSearchResults] = useState('');
    const [playlistName, setPlaylistName] = useState('Enter Playlist');
    const [playlistTracks, setPlaylistTracks] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 3000);
    }, []);


    const search = useCallback((term) => {
     Spotify.search(term).then(setSearchResults);
    }, []);

    const addTrack = useCallback((track) => {
        if (playlistTracks.some((savedTrack)=> savedTrack.id === track.id)) {
            return;
        }

        setPlaylistName((prevTracks) => [...prevTracks, track])
    }, [playlistTracks]);

    const removeTrack = useCallback((track) => {
        if(playlistTracks.filter((currentTrack) => currentTrack.id !== track.id)) {
          return;   
        }
    }, [playlistTracks])

    const updatePlaylistName = useCallback((name) => {
        setPlaylistName(name)
    }, []);

    const savePlaylist = useCallback(() => {
        const trackUris = playlistTracks && playlistTracks.map((track) => track.uri);
        Spotify.savePlaylist(playlistName, trackUris).then(() => {
            setPlaylistName("Enter Playlist");
            setPlaylistTracks([]);
        });
    }, [playlistName, playlistTracks]);


    return (
        <>
        {
            isLoading ? <l-helix
            size="129"
            color="darkblue"
            speed="4">  
           </l-helix>   : 

        <div>
           <h1>Ja<span>mmm</span>ing</h1>
         <div className="App">
            <Sidebar />
            <SearchBar onSearch={search} />
         <div className="App-playlist">
            <SearchResults searchResults={searchResults} onAdd={addTrack} />
            <Playlist
              playlistName={playlistName}
              playlistTracks={playlistTracks}
              onNameChange={updatePlaylistName}
              onSave={savePlaylist}
              onRemove={removeTrack}
            />
         </div>
         </div>
        </div>

        }
        </>

    )
}

export default Jammming;