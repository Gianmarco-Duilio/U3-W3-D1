import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { FaTrash } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { deleteFromFavorites } from "../redux/actions";

const FavoritesCompanies = () => {
  const favorites = useSelector((state) => {
    return state.favorite.content;
  });

  const dispatch = useDispatch();

  return (
    <Container>
      <Row>
        <Col sm={12}>
          <Col xs={12}>
            {" "}
            <h1 className="display-1">Your FAVORITES COMPANIES</h1>
          </Col>
          <ul style={{ listStyle: "none" }}>
            {favorites.map((company, i) => (
              <li key={i} className="my-4">
                <Row className="mx-0 mt-3 p-3" style={{ border: "1px solid #00000033", borderRadius: 4 }}>
                  <Col xs={5}>
                    <Link to={`/${company.company_name}`}>{company.company_name}</Link>
                  </Col>
                  <Col xs={5}>
                    <a href={company.url} target="_blank" rel="noreferrer">
                      {company.title}
                    </a>
                  </Col>
                  <Col xs={2}>
                    <Button
                      variant="danger"
                      onClick={() => {
                        dispatch(deleteFromFavorites(i));
                      }}
                    >
                      <FaTrash />
                    </Button>
                  </Col>
                </Row>
              </li>
            ))}
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default FavoritesCompanies;
