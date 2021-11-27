import React from 'react'
import Grid from '../../Grid'
import Thumb from '../Thumb'
import SearchBar from '../../SearchBar'
import { useThumbFench } from '../../Hook/useThumbFench'
// import * as FaIcons from "react-icons/fa";
// import Card from '../../Card' 
import MovieimgNow from '../../movieDataNow'

function Movie() { 
    const { setSearchTerm } = useThumbFench();
    return(
        <div className='allMovie'>
            <SearchBar setSearchTerm={setSearchTerm} />
            <Grid header='Popular Movies'>
                {MovieimgNow.map(movie => (
                    <Thumb
                    key={movie.nm}
                    clickable
                    image={movie.img}
                    movieId={movie.nm}
                    />
                ))}
            </Grid>
        </div>
    )
}

export default Movie