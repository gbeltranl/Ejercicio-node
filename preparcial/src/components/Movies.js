import React, { useEffect, useState } from "react";
import { FormattedDate, FormattedMessage, FormattedNumber } from "react-intl";
import Card from "./Card";
import Bar from '../charts/bar-chart';


export const Movies = () => {
  const lang = navigator.language;
  const [movies, setMovies] = useState(null);
  const [detail, setDetail] = useState(null);

  useEffect(() => {
    if (!navigator.onLine) {
      console.log("Offline");
      if (localStorage.getItem("movies") === null) {
        setMovies({});
      } else {
        let moviesInStorage = JSON.parse(localStorage.getItem("movies"));
        setMovies(moviesInStorage);
      }
    } else {
      if (lang === "es") {
        fetch(
          "https://gist.githubusercontent.com/josejbocanegra/f784b189117d214578ac2358eb0a01d7/raw/2b22960c3f203bdf4fac44cc7e3849689218b8c0/data-es.json"
        )
          .then((res) => res.json())
          .then((res) => {
            setMovies(res);
            localStorage.setItem("movies", JSON.stringify(res));
          });
      } else {
        fetch(
          "https://gist.githubusercontent.com/josejbocanegra/8b436480129d2cb8d81196050d485c56/raw/48cc65480675bf8b144d89ecb8bcd663b05e1db0/data-en.json"
        )
          .then((res) => res.json())
          .then((res) => {
            setMovies(res);
            localStorage.setItem("movies", JSON.stringify(res));
          });
      }
    }
    console.log(movies);
  }, [navigator.language]);

  function changeDetail(movie) {
    setDetail(movie);
  }

  return (
    <>
      <div className="row">
        <div className="col">
        <table className="table ">
          <thead className="thead">
            <tr>
              <th scope="col">#</th>
              <th scope="col">
                <FormattedMessage id="Name" />
              </th>
              <th scope="col">
                <FormattedMessage id="DirectedBy" />
              </th>
              <th scope="col">
                <FormattedMessage id="Country" />
              </th>
              <th scope="col">
                <FormattedMessage id="Budget" />
              </th>
              <th scope="col">
                <FormattedMessage id="Release" />
              </th>
              <th scope="col">
                <FormattedMessage id="Views" />
              </th>
            </tr>
          </thead>
          <tbody>
            {movies &&
              movies.map((movie, i) => (
                <tr
                  onClick={() => {
                    changeDetail(movie);
                  }}
                >
                  <th scope="row">{movie.id}</th>
                  <td>{movie.name}</td>
                  <td>{movie.directedBy}</td>
                  <td>{movie.country} </td>
                  <td>
                    {movie.budget}
                    {movie.budget > 1 ? (
                      <FormattedMessage id="Millions" />
                    ) : (
                      <FormattedMessage id="Million" />
                    )}{" "}
                  </td>
                  <td>
                    <FormattedDate
                      value={new Date(movie.releaseDate)}
                      year="numeric"
                      month="long"
                      day="numeric"
                    />
                  </td>
                  <td>
                    <FormattedNumber value={movie.views} />
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        {movies && <Bar data = {movies} width={1000}></Bar>}
        </div>
        {detail ? (
          <div className="col-3">
            <Card movie={detail} />
          </div>
        ) : (
          <></>
        )}
      </div>
      
    </>
  );
};
