import axios from "axios";
import React from "react";
import { ApiKey } from "../constants";
import { useLoaderData } from "react-router-dom";

export const loader = async (arg) => {
  console.log(arg.params.id);
  const movieId = arg.params.id;

  const response = await axios.get(
    `http://www.omdbapi.com/?apikey=${ApiKey}&i=${movieId}`
  );
  // console.log(response)
  return { movie: response };
};
const MovieDetailPage = () => {
  const { movie } = useLoaderData();
  const data = movie.data;
  console.log(data);
  return (
    <div className="w-full h-screen bg-gray-200 flex justify-center items-center">
<div
      className="flex w-[80%] mx-auto flex-col gap-4 p-4 rounded-lg bg-white
     "
    >
      <div className="w-full flex gap-2">
        <div className="w-1/2 rounded-lg overflow-hidden">
          <img src={data.Poster} alt="" className="w-full h-72 object-cover " />
        </div>
        <div className="w-1/2 p-4 flex flex-col gap-3">
          <h1 className="text-lg font-bold"> Title : <span className="text-sm font-semibold">{data.Title}</span></h1>
          <h1 className="text-lg font-bold">Year : <span className="text-sm font-semibold">{data.Year}</span></h1>
          <h1 className="text-lg font-bold"> Actor : <span className="text-sm font-semibold">{data.Actors}</span></h1>
          <h1 className="text-lg font-bold"> Awards : <span className="text-sm font-semibold">{data.Awards}</span></h1>
          <h1 className="text-lg font-bold"> Country : <span className="text-sm font-semibold">{data.Country}</span></h1>
          <h1 className="text-lg font-bold"> Director :<span className="text-sm font-semibold">{data.Director}</span> </h1>
        </div>
      </div>

      <p className="text-lg font-semibold mt-4">{data.Plot}</p>
    </div>

    </div>
    
  );
};

export default MovieDetailPage;
