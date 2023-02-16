import { Container, Row, Col, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import JobModal from "./JobModal";

const FavouritesCompany = () => {
  const favourites = useSelector((state) => state.favourites.favCompany);
  return (
    <Container className="mt-5">
      <Row className="d-flex justify-content-center align-items-center mt-5">
        <Col xs={10} md={8} lg={6}>
          <ListGroup>
            <ListGroup.Item key="8">AZIENDE SALVATE</ListGroup.Item>
            {favourites.map((data, i) => {
              return (
                <ListGroup.Item key={data.id} className="d-flex justify-content-between align-items-center">
                  <Link key={i} to={`/${data.company_name}`}>
                    {data.company_name}
                  </Link>
                  <JobModal prop={data} />
                </ListGroup.Item>
              );
            })}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};
export default FavouritesCompany;
