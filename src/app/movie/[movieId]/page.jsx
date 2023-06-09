"use client";
import React from "react";
import "./movie.css";
import Image from "next/image";
import { img_300, unavailable } from "@/config/config";

async function getMovieDetails(id) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`
  );
  return res.json();
}

async function getMovieRec(id) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`
  );
  return res.json();
}

async function getMovieCasts(id) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`
  );
  return res.json();
}

const MovieDetails = async (props) => {
  const id = props.params.movieId;
  const movie = await getMovieDetails(id);
  const movieCast = await getMovieCasts(id);
  const recommendations = await getMovieRec(id);

  const durationHours = Math.round(movie?.runtime / 60);
  const durationMinutes = Math.round(movie?.runtime % 60);

  return (
    <div>
      <div className="movieContainerf">
        <div className="moviePoster">
          <div>
            <Image
              className="poster"
              src={
                movie?.poster_path
                  ? `${img_300 + movie?.poster_path}`
                  : unavailable
              }
              alt={movie?.title}
              width={300}
              height={300}
            />
          </div>
          <div className="detailsContainer">
            <h1 className="title">{movie?.title}</h1>
            <div className="movieInfos">
              <h3>{movie.vote_average}</h3>
              {/* <h3> {movie?.release_date}</h3> */}
              {movie?.runtime > 0 && (
                <>
                  <h3 className="">{`${durationHours}h ${durationMinutes}m`}</h3>
                </>
              )}
            </div>

            <p className="movieOverview">{movie?.overview}</p>
            <h5 className="text-md font-medium">
              {movie?.genres?.map((genre) => genre?.name).join(", ")}
            </h5>
            <div className="action-btn">
              <p> </p>
              <button onClick={handleDownload} className="myButton">
                Download
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
