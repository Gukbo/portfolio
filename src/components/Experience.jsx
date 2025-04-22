import styles from "./Experience.module.css";

const Experience = () => {
  return (
    <>
      <div className={styles.experienceWrapper}>
        <h2>-- Experience --</h2>
        <div className={styles.experienceContainer}>
          <div className={styles.subWrapper}>
            <div className={styles.subContainer}>
              <p className={styles.boldP}>2018.03 ~ 2025.02</p>
              <p className={styles.normalP}>한성대학교 IT 공과대학 졸업 👨🏻‍🎓</p>
            </div>
          </div>
          <div className={styles.subWrapper}>
            <div className={styles.subContainer}>
              <p className={styles.boldP}>2019.08 ~ 2022.02</p>
              <p className={styles.normalP}>
                육군 통신병, 행정병 병장 만기 전역 🪖
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
