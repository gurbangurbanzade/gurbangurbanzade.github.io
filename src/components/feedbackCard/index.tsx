import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
import "./style.scss";

interface User {
  name: string;
  surname: string;
  image?: string;
  text: string;
  createdAt: string;
}

interface FeedbackCardProps {
  user: User;
}

const FeedbackCard = ({ user }: FeedbackCardProps) => {
  return (
    <div className="review-card">
      <div className="header-content">
        <div className="img-area">
          <img alt={user.name} src={user.image || ""} />
        </div>
        <div className="info">
          <div className="infoName">
            <h4>{user.name}</h4>
            <h4>{user.surname}</h4>
          </div>
          <p>Frontend Developer</p>
        </div>
      </div>
      <div className="single-review">
        <p>
          {user.text.substring(0, 150)} {user.text.length > 100 ? "..." : null}
        </p>
      </div>
      <div className="review-footer">
        <p>Reviewed on </p>
        <p> {user.createdAt.substring(0, 10)} </p>
      </div>
    </div>
  );
};

export default FeedbackCard;
