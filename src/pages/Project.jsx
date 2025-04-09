import styles from "./Home.module.css";
import Nav from "../components/nav";

const Project = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <Nav />
        <div className={styles.homeContainer}>
          <p>Project</p>
        </div>
      </div>
    </>
  );
};

export default Project;
