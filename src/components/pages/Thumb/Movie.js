import React from 'react'
import Grid from '../../Grid'
import Thumb from '../Thumb'
// import SearchBar from '../../SearchBar'
// import * as FaIcons from "react-icons/fa";
// import Card from '../../Card' 
import MovieimgNow from '../../movieDataNow'

function Movie() {
    return(
        <div className='allMovie'>
            {/* <SearchBar /> */}
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
            {/* <div className='ui search'>
                <div  className='ui icon input'>
                    <input type="text" placeholder="Search movie" className="prompt" />
                    
                </div>

            {       MovieimgNow && MovieimgNow.map((item,index)=>         
                        <div key={index}>
                           <Card number={item.nm} img={item.img}  btn='True'/> 
                        </div>
                    )
                }
            </div> */}
        </div>
    )
}

export default Movie