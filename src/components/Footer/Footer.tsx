import styles from "./footer.module.scss";
import { BsTelegram } from "react-icons/bs";
import { SiDiscord } from "react-icons/si";
import { RxGithubLogo } from "react-icons/rx";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.col}>
        <h2 className={styles.title}>Полезный материал</h2>
        <div className={styles.links}>
          <a className={styles.link} href="#">
            Правил игры.
          </a>
          <a className={styles.link} href="#">
            Правила сайта.
          </a>
          <a className={styles.link} href="#">
            Гайд для новичков.
          </a>
        </div>
      </div>
      <div className={styles.col}>
        <h2 className={styles.title}>Мы в соц.сетях</h2>
        <div className={styles.links}>
          <BsTelegram size={40} color="#00b3ff" />
          <SiDiscord size={40} color="#662eff" />
          <RxGithubLogo size={40} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
