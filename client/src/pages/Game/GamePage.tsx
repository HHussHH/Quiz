import Card from "../../components/GamePage/Card/Card";
import QuestCounter from "../../components/GamePage/QuestCounter/QuestCounter";
import Timer from "../../components/GamePage/Timer/Timer";
import CardPanel from "../../components/GamePage/CardPanel/CardPanel";
import { selectFinish } from "../../features/endGame/finishSlice";
import { useAppSelector } from "../../store";
import styles from "./gamepage.module.scss";
const GamePage = () => {
  const { isFinish } = useAppSelector(selectFinish);
  return (
    <div className={styles.field}>
      {isFinish ? (
        <QuestCounter />
      ) : (
        <>
          <Timer />
          <Card />
        </>
      )}
    </div>
  );
};

export default GamePage;
