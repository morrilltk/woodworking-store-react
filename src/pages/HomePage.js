import { Container } from "reactstrap";
import Header from "../components/Header";
import MediaObject from "../components/MediaObject";

const HomePage = () => {
  return (
    <Container>
      <Header header='Home' />
      <MediaObject />
      <hr />
      <MediaObject imageOnRight />
      <hr />
      <MediaObject />
    </Container>
  );
};

export default HomePage;
