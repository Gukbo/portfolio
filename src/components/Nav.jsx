import "./styles.css";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="NavContainer">
        <button className="Menu-btn">☰</button>
        <button onClick={() => navigate("/")} className="Home-btn">
          LHE PORTFOLIO
        </button>
      </div>
    </>
  );
};

export default Nav;
