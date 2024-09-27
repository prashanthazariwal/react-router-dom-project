import React from "react";
import { Link } from "react-router-dom";

const Movies = ({ movieApiResponse ,errorMessage ,isError}) => {
  // console.log(movieApiResponse, "movies");
  if(isError){
    return <h1 className="text-lg font-bold mt-4">{errorMessage}</h1>;
  }
  if (movieApiResponse && movieApiResponse.Response === "False") {
    return <h1 className="text-lg font-bold mt-4">{movieApiResponse.Error}</h1>;
  }

  return (
    <div className="w-full flex flex-wrap gap-4 justify-center">
      {movieApiResponse.Search.map((movie) => {
        return (
          <Link to={`moviedetail/${movie.imdbID}`} className="w-2/6 " key={movie.imdbID}>
          <div
            
            className="w-full p-1 mt-4 rounded-lg overflow-hidden bg-white"
          >
            <div className="w-full h-52 overflow-hidden rounded-lg">
              <img
                src={movie.Poster}
                alt=""
                className="w-full h-full object-cover "
              />
            </div>
            <h1 className="text-sm font-bold mt-4">{movie.Title}</h1>
            <h2 className="text-sm font-semibold">{movie.Year}</h2>
          </div>
          </Link>
          
        );
      })}
    </div>
  );
};

export default Movies;
