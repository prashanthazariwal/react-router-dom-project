import React from "react";
import Search from "../components/Search";
import Movies from "../components/Movies";
import axios from "axios";
import { ApiKey } from "../constants";
import { useLoaderData } from "react-router-dom";

export async function loader(args) {
  console.log(args)
  const url = new URL(args.request.url);
  console.log(url)
  const searchTeram = url.searchParams.get("search") || "my hero academia"; // in this line if we not get the search term like if we didnt search the default value of search term is my hero academia

  try {
    const response = await axios.get(
      `http://www.omdbapi.com/?apikey=${ApiKey}&s=${searchTeram}`
    );

    return { movieApiResponse: response.data, isError: false };
  } catch (error) {
    console.log(error);
    const newError = error?.response?.data?.Error || error.message || "something went wrong";
    return { movieApiResponse: null, isError: true, error: newError };
  }
}

const Home = () => {
  const { movieApiResponse , error , isError } = useLoaderData();

  return (
    <div className="w-10/12 mx-auto bg-gray-200 rounded-lg  p-4 flex flex-col items-center">
      <Search />
      <Movies movieApiResponse={movieApiResponse} errorMessage ={error} isError={isError} />
    </div>
  );
};

export default Home;
