import { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import Job from "./Job";
import FavoritesIndicator from "./FavoritesIndicator";
import { useSelector, useDispatch } from "react-redux";
import { getJobs } from "../redux/actions";

const MainSearch = () => {
  const [query, setQuery] = useState("");
  const search = useSelector((state) => state.search.available);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };
  const dispatch = useDispatch();
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(getJobs(query));
  };

  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <Row>
            <Col xs={10}>
              {" "}
              <h1 className="display-1">Remote Jobs Search</h1>
            </Col>
            <Col xs={2}>
              <FavoritesIndicator />
            </Col>
          </Row>
        </Col>
        <Col xs={10} className="mx-auto">
          <Form onSubmit={handleSubmit}>
            <Form.Control type="search" value={query} onChange={handleChange} placeholder="type and press Enter" />
          </Form>
        </Col>
        <Col xs={10} className="mx-auto mb-5">
          {search.map((jobData) => (
            <Job key={jobData._id} data={jobData} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default MainSearch;
