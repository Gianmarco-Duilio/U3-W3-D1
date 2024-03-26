import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { PiHeartStraightFill } from "react-icons/pi";
import { useSelector } from "react-redux";

const FavoritesIndicator = () => {
  const favoritesLenght = useSelector((state) => {
    return state.favorite.content.length;
  });

  const navigate = useNavigate();

  return (
    <div className="d-flex justify-content-end my-4">
      <Button onClick={() => navigate("/favorites")} className="d-flex align-items-center" variant="danger">
        <PiHeartStraightFill />
        <span className="ms-2">{favoritesLenght}</span>
      </Button>
    </div>
  );
};

export default FavoritesIndicator;
