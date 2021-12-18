import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router,Route,Routes} from'react-router-dom';
import Home from './components/pages/HomePage/Home';
import Buyticket from './components/pages/Buyticket/Buyticket';
import MovieimgNow from './components/movieDataNow';
import Movie from './components/pages/Thumb/Movie';
import Register from './components/pages/register/Register';


function App() {
  return (
    <div className='SignUp'>
      <Register />
    </div>
    // <div id="main">
    // <Router>
    //   <Navbar />
    //   <Routes>      
    //     <Route path="/" element={<Home />} />
    //     <Route path="/Buyticket/:id" element={<Buyticket data={MovieimgNow}/>}/> 
    //     <Route path="/movie" element={<Movie />} />
    //   </Routes>      
    // </Router>
    // </div>
  );
}

export default App;
