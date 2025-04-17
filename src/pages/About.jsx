import styles from "./About.module.css";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import Nav from "../components/Nav";
import Foot from "../components/Foot";

const About = () => {
  return (
    <>
      <div className={styles.aboutWrapper}>
        <Nav />
        <div className={styles.aboutContainer}>
          <Experience />
          <Skills />
        </div>
        <Foot />
      </div>
    </>
  );
};

export default About;
