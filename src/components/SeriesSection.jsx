import { Button, Card, Col, Container, Row, Spinner } from "react-bootstrap";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const SeriesSection = (props) => {
  const [series, setSeries] = useState("");

  const fetchSeries = () => {
    fetch(`http://www.omdbapi.com/?apikey=fed04270&s=${props.seriesName}&type=series `)
      .then((resp) => {
        if (!resp.ok) {
          console.log("non è arrivato niente");
        }
        return resp.json();
      })
      .then((arr) => {
        const arrSeries = arr.Search;
        setSeries(arrSeries);
        console.log(arr);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchSeries();
  }, []);

  return (
    <Container>
      {series ? (
        <Row xs={4}>
          {series.map((serie) => {
            return (
              <Col key={serie.imdbID} className="mb-3">
                <Card>
                  <Card.Img src={serie.Poster} alt={serie.Title} />
                  <Card.Body>
                    <Card.Title>{serie.Title}</Card.Title>
                    <Card.Text>({serie.Year})</Card.Text>
                    <Link to={"/menu/description/" + serie.imdbID}>
                      <Button variant="primary">descrizione</Button>
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      ) : (
        <Spinner variant="success" />
      )}
    </Container>
  );
};
export default SeriesSection;
