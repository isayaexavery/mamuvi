"use client";
import SingleContent from "@/components/singlecontent/SingleContent";
import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Search.css";

const Search = () => {
  const [type, setType] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);
  const [numOfPages, setNumOfPages] = useState();

  const fetchSearch = async () => {
    console.log("start loadi ng");
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/search/${type ? "tv" : "movie"}?api_key=${
          process.env.NEXT_PUBLIC_API_KEY
        }&language=en-US&query=${searchText}&page=${page}&include_adult=false`
        //`https://api.themoviedb.org/3/search/${type ? "tv" : "movie"}?api_key=1541637417b92001500f09de1f4b3a02&language=en-US&query=rambo&page=1&include_adult=false`
      );
      setContent(data.results);
      setNumOfPages(data.total_pages);
      // console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    window.scroll(0, 0);
    fetchSearch();
    // eslint-disable-next-line
  }, [type, page]);

  return (
    <div className="">
      <div className="searchContainer">
        <input
          style={{ flex: 1 }}
          className="searchBox"
          label="Search"
          variant="filled"
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="myButton"
          style={{ padding: 5, margin: 5 }}
          onClick={() => {
            setType(true);
            setPage(1);
          }}
        >
          TV Series
        </button>
        <button
          className="myButton"
          style={{ padding: 5 }}
          onClick={() => {
            setType(false);
            setPage(1);
          }}
        >
          Movies
        </button>
      </div>

      <div className="trending">
        {content &&
          content.map((c) => (
            <SingleContent
              key={c.id}
              id={c.id}
              poster={c.poster_path}
              title={c.title || c.name}
              date={c.first_air_date || c.release_date}
              media_type={type ? "tv" : "movie"}
              vote_average={c.vote_average}
            />
          ))}
        {searchText &&
          !content &&
          (type ? <h2>No Series Found</h2> : <h2>No Movies Found</h2>)}
      </div>
      {/* {numOfPages > 1 && (
          <CustomPagination setPage={setPage} numOfPages={numOfPages} />
        )} */}
    </div>
  );
};

export default Search;
