import { useState } from "react";
import styles from "./Sidebar.module.css";
// import { useNavigate } from "react-router-dom";
import Experience from "./Experience";

const Sidebar = () => {
  // const navigate = useNavigate();

  return (
    <>
      <div className={styles.sideWrapper}>
        <div className={styles.sideContainer}>
          <ul>
            <a href="/">HOME</a>
          </ul>
          <ul>
            <a href="/info">About</a>
          </ul>
          <ul>
            <a href="/info">Experience</a>
          </ul>
          <ul>
            <a href="/info">Skills</a>
          </ul>
          <ul>
            <a href="/info">Projects</a>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
