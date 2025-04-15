import styles from "./Home.module.css";
import Nav from "../components/nav";
import Footer from "../components/Footer";

const Details = () => {
  return (
    <>
      <div className={styles.detailWrapper}>
        <Nav />
        <div className={styles.homeWrapper}>
          <div className={styles.aboutContainer}>
            <p>details</p>
          </div>
          <div className={styles.projectContainer}>
            <p>project</p>
          </div>
          <div className={styles.contactContainer}>
            <p>Contact</p>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Details;
