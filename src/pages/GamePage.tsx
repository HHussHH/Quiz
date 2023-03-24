import Card from "../components/Card/Card";
import Timer from "../components/Card/Timer";
import styles from "./gamepage.module.scss";

const GamePage = () => {
  return (
    <div className={styles.field}>
      <Timer />
      <Card />
    </div>
  );
};

export default GamePage;
