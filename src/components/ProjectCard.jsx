// 이미지 크기 200 * 300

import styles from "./ProjectCard.module.css";
import todoProj from "../assets/todo_project.png";
import movieProj from "../assets/movie_project.png";
import pokeProj from "../assets/poke_project.png";
import portProj from "../assets/port_project.png";

const ProjectCard = () => {
  return (
    <>
      <div className={styles.cardWrapper}>
        <div className={styles.cardContainer}>
          <div className={styles.cardbox}>
            <p>투두앱</p>
            {<img src={todoProj} alt="todos project" />}
          </div>
        </div>
        <div className={styles.cardContainer}>
          <div className={styles.cardbox}>
            <p>영화앱</p>
            {<img src={movieProj} alt="movie project" />}
          </div>
        </div>
        <div className={styles.cardContainer}>
          <div className={styles.cardbox}>
            <p>pokeDex</p>
            {<img src={pokeProj} alt="pokemon project" />}
          </div>
        </div>
        <div className={styles.cardContainer}>
          <div className={styles.cardbox}>
            <p>포트폴리오</p>
            {<img src={portProj} alt="portfolio project" />}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
