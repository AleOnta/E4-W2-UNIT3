import { Row, Col, Button } from "react-bootstrap";
import { BsFillBookmarkHeartFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

const Job = ({ data }) => {
  const dispatch = useDispatch();
  return (
    <Row className="mx-0 mt-3 p-3" style={{ border: "1px solid #00000033", borderRadius: 4 }}>
      <Col xs={3} className="d-flex justify-content-between align-items-center">
        <Link to={`/${data.company_name}`}>{data.company_name}</Link>
        <Button
          variant="primary"
          className="ml-3 d-flex justify-content-center align-items-center"
          onClick={() => {
            dispatch({
              type: "ADD_TO_FAVOURITES",
              payload: data,
            });
          }}
        >
          <BsFillBookmarkHeartFill />
        </Button>
      </Col>
      <Col xs={9}>
        <a href={data.url} target="_blank" rel="noreferrer">
          {data.title}
        </a>
      </Col>
    </Row>
  );
};

export default Job;
