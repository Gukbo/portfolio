import styles from "./Project.module.css";
import ProjectCard from "./projectCard";

const Project = () => {
  return (
    <>
      <div className={styles.projectWrapper}>
        <h2>-- Projects-- </h2>
        <div className={styles.projectContainer}>
          <div className={styles.subWrapper}>
            <div className={styles.subContainer}>
              <ProjectCard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
