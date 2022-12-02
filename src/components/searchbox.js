import React from "react";

const Searchbox = (props) =>{
  return(
    <div>
      <h1 className="col col-sm-4">
          <input className="form-control" placeholder="search for a film.."
          value={props.value}
          onChange ={(event) => props.setsearchfilm(event.target.value)}/>
      </h1>
    </div>
  )
}
export default Searchbox