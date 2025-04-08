import "../components/styles.css";
import Nav from "../components/nav";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <Nav />
      <div className="HomeContainer">
        <p>Home</p>
        <div className="btnContainer">
          <button onClick={() => navigate("/project")} className="enter-btn">
            project로 이동
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
