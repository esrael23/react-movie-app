import React from "react";

const Filmlist = (props) => {
  return (
    <>
    {
       props.films.map (
       (film, index) =>
       
       <div className="d-flix justify-content-start m-3">
        <img src={film.Poster} alt = "harry potter"/>
        {/* <label className="title">{film.title}</label> */}
       </div>
       )

    }
    </>
    
  );

}


export default Filmlist