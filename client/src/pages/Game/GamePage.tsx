import Card from "../../components/GamePage/Card/Card";
import QuestCounter from "../../components/GamePage/QuestCounter/QuestCounter";
import Timer from "../../components/GamePage/Timer/Timer";
import CardPanel from "../../components/GamePage/CardPanel/CardPanel";
import { selectFinish } from "../../features/endGame/finishSlice";
import { useAppSelector } from "../../store";
import styles from "./gamepage.module.scss";
import { useState } from "react";
const GamePage = () => {
  const [currentQuestId, setCurrentQuestId] = useState<number>(10);
  const [questPosition, setQuestPosition] = useState<number>(1);

  const { isFinish } = useAppSelector(selectFinish);
  return (
    <div className={styles.field}>
      {isFinish ? (
        <QuestCounter />
      ) : (
        <>
          <Timer currentQuestId={currentQuestId} />
          <Card />
          <CardPanel questPosition={questPosition} />
        </>
      )}
    </div>
  );
};

export default GamePage;
