import styles from "./Home.module.css";
import Nav from "../components/nav";
import Footer from "../components/footer";
import { useNavigate } from "react-router-dom";
import Homepage from "../components/Homepage";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className={styles.wrapper}>
        <Nav />
        <div className={styles.homeWrapper}>
          <div className={styles.homeContainer}>
            <Homepage />
          </div>
          <div className={styles.btnContainer}>
            <button
              onClick={() => navigate("/project")}
              className={styles.enterbtn}
            >
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
