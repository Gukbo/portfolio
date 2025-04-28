import styles from "./Project.module.css";
import ProjectCard from "./projectCard";

const Project = () => {
  return (
    <>
      <div className={styles.projectWrapper}>
        <h2>-- Projects-- </h2>
        <ProjectCard />
      </div>
    </>
  );
};

export default Project;
