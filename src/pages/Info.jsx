import styles from "./Info.module.css";
import About from "../components/About";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import Project from "../components/Project";
import Nav from "../components/Nav";
import Foot from "../components/Foot";

const Info = () => {
  return (
    <>
      <div className={styles.infoWrapper}>
        <Nav />
        <div className={styles.infoContainer}>
          <About />
          <Experience />
          <Skills />
          <Project />
        </div>
        <Foot />
      </div>
    </>
  );
};

export default Info;
