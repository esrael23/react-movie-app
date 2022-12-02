

import Create from "./pages/create";
import Notes from "./pages/notes";
import "bootstrap/dist/css/bootstrap.min.css";

// import  "./app.css";
import "./app.css"
import React, {Component, createContext, useEffect, useState} from "react";
import Filmlist from "./components/Filmlist";
import Filmliatheading from "./components/filmlistheading";
import Searchbox from "./components/searchbox";


const App = () => {
  const [films, setFilms] = useState([
   
  ]);
  // making the search dynamic with state obj
  const [searchfilm, setsearchfilm ] = useState('');


  const getFilmRequest = async(searchfilm) =>{
    const url = `http://www.omdbapi.com/?s=${searchfilm}&apikey=ce03f148`;

    const respons = await fetch(url);

    // 
    const responseJson = await respons.json();
    if (responseJson.Search){
      setFilms(responseJson.Search);
    }
// testing log
    // console.log(responseJson);

// to replace hardcoded data with api data

  //  setFilms(responseJson.Search);
  }
  useEffect(() =>{
    getFilmRequest();
  },[searchfilm]);
  return(
    <div className = " App  container-fluid film-css">

<div className="row d-flex align-items-center mt-4 mb-4" >
        <Filmliatheading heading="films"/>
        <Searchbox searchfilm = {searchfilm} setsearchfilm = {setsearchfilm}/>
      </div> 
      <div className="row" >
        <Filmlist films ={films}/>
      </div> 
      
      
    </div>
  );
}




export default App;
