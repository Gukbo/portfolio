import "./styles.css";
import { IoLogoGithub } from "react-icons/io";
import { SiVelog } from "react-icons/si";

const Footer = () => {
  return (
    <>
      <div className="FooterContainer">
        <div className="spanContainer">
          <p>©2025 Hans_gall. All Rights Reserved.</p>
        </div>
        <div className="logoContainer">
          <IoLogoGithub
            onClick={() => window.open("https://github.com/Gukbo")}
          />
          <SiVelog
            onClick={() => window.open("https://velog.io/@mebung2/posts")}
          />
        </div>
      </div>
    </>
  );
};

export default Footer;
