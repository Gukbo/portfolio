import "../components/styles.css";
import Nav from "../components/nav";
import Footer from "../components/footer";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="wrapper">
        <Nav />
        <div className="HomeWrapper">
          <div className="HomeContainer">
            <p>Home</p>
          </div>
          <div className="btnContainer">
            <button onClick={() => navigate("/project")} className="enter-btn">
              Read more
            </button>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
