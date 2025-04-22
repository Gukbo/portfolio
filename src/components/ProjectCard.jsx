import styles from "./ProjectCard.module.css";
import todosProj from "../assets/todos_project.png";

const ProjectCard = () => {
  return (
    <>
      <div className={styles.cardWrapper}>
        <div className={styles.cardContainer}>
          <p>투두앱</p>
          <img src={todosProj} alt="todos project" />
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
