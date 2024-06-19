import React, {useState, useCallback} from 'react';

import "../../src/index.css"


const SearchBar = (props) => {

    const [term, setTerm] = useState('');

    const handleTermChange = useCallback((e) => {
        setTerm(e.target.value);
    }, []);

    const search = useCallback(() => {
        props.onSearch(term);
    }, [props, term]);

    const handleSearch = (e) => {
     try {
        e.preventDefault();
        if(term) {
            search();
        }
     } catch(error) {
        console.log(error);
     }
    }

    return (
        <div className="searchBar">
            <input onChange={handleTermChange} placeholder="Enter A Song Title" />
            <button className="SearchBtn" onClick={handleSearch}> SEARCH </button>
        </div>
    )


}

export default SearchBar;
