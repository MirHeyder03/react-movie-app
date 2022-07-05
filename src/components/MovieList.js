import React from 'react';

export default function MovieList(props) {
  return (
    <React.Fragment>
    {
      props.movies.map(movie=>(
                
    <div className="card movie_card" key={movie.imdbID}>
    <img
      src={movie.Images}
      className="card-img-top"
      alt="..."
    />
    <div className="card-body">
      <i
        className="fas fa-play play_button"
        data-toggle="tooltip"
        data-placement="bottom"
        title="Play Trailer"
      ></i>
      <h5 className="card-title">{movie.Title}</h5>
      <button onClick={()=>props.deleteMovie(movie)} className="btn btn-md btn-outline-danger">Delete</button>
      <span className="movie_info float-right align-items-center">
        <i className="fas fa-star"></i>{movie.imdbRating}</span>
    </div>
  </div>
      ))
    }
    </React.Fragment>
  )
}
