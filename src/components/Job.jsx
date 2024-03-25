import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import { PiHeartStraightFill } from "react-icons/pi";

const Job = ({ data }) => {
  const dispatch = useDispatch();
  return (
    <Row className="mx-0 mt-3 p-3" style={{ border: "1px solid #00000033", borderRadius: 4 }}>
      <Col xs={3}>
        <Link to={`/${data.company_name}`}>{data.company_name}</Link>
      </Col>
      <Col xs={6}>
        <a href={data.url} target="_blank" rel="noreferrer">
          {data.title}
        </a>
      </Col>
      <Col>
        <Button
          style={{ border: "none", backgroundColor: "#ffffff" }}
          onClick={() => {
            dispatch({
              type: "ADD_TO_FAVORITES",
              payload: data,
            });
          }}
        >
          <PiHeartStraightFill
            style={{
              color: "#ff0000",
            }}
          />
        </Button>
      </Col>
    </Row>
  );
};
export default Job;
