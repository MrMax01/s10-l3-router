import { useEffect, useState } from "react";
import { Card, Container, Image, Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";

const DetailFilm = () => {
  const id = useParams();
  const [film, setFilm] = useState();
  const fetchDescriptionFilm = () => {
    fetch("http://www.omdbapi.com/?apikey=fed04270&i=" + id.idFilm)
      .then((resp) => {
        if (!resp.ok) {
          console.log(resp);
        }
        return resp.json();
      })
      .then((film) => {
        setFilm(film);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    fetchDescriptionFilm();
  }, []);

  return (
    <Container>
      {film ? (
        <>
          <img src={film.Poster} alt="" />
          <h2>
            {film.Title}
            {film.Year}
          </h2>
          <p>Actor: {film.Actors}</p>
          <h5>Plot</h5>
          <p>{film.Plot}</p>
          <h5>Awards</h5>
          <p>{film.Awards}</p>
        </>
      ) : (
        <Spinner variant="success" />
      )}
    </Container>
  );
};
export default DetailFilm;
