import { FC } from "react";
import Footer from "../../components/Footer/Footer";
import style from "./helpPage.module.scss";
import NavBar from "../../components/NavBar/NavBar";

const HelpPage: FC = () => {
  return (
    <div>
      <NavBar />
      <div className={style.helpPage}>
        <h1 className={style.helpPage_title}>Обратная связь</h1>
        <p className={style.helpPage_text}>
          Вы можете отправить ваше сообщение в наш телеграм канал разработчика:
        </p>
        <a
          href="https://t.me/MustafaevN"
          target="_blank"
          rel="noreferrer"
          className={style.helpPage_link}
        >
          Телеграм
        </a>
      </div>

      <Footer />
    </div>
  );
};

export default HelpPage;
