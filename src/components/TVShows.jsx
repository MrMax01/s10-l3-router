import { Container } from "react-bootstrap";
import SeriesSection from "./SeriesSection";

const TVShows = () => {
  return (
    <Container className="text-center">
      <h1>TVSHOWS</h1>
      <SeriesSection seriesName="after life" />
      <SeriesSection seriesName="batman" />
    </Container>
  );
};
export default TVShows;
