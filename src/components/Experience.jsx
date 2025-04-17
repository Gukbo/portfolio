import styles from "./Experience.module.css";

const Experience = () => {
  return (
    <>
      <div className={styles.experienceWrapper}>
        <div className={styles.experienceContainer}>
          <h2>my experience</h2>
          <div className={styles.subContainer}>
            <p className={styles.whiteP}>2018.03 ~ 2025.02</p>
            <p className={styles.normalP}>한성대학교 IT 공과대학 졸업</p>
          </div>
          <div className={styles.subContainer}>
            <p className={styles.whiteP}>2019.08 ~ 2022.02</p>
            <p className={styles.normalP}>육군 통신병, 행정병 병장 만기 전역</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
