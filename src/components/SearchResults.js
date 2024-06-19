import React from 'react';

import "../../src/index"

import Tracklist from "../../src/components/Tracklist.js"

const SearchResults = (props) => {
    return ( 
      <div className='SearchResults'>
        <h2> Results </h2>
        <Tracklist tracks={props.SearchResults}  onAdd = {props.onAdd} isRemoval={false}/>
      </div>
    )
}

export default SearchResults;