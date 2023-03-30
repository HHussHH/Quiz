import Card from "../../components/Card/Card";
import QuestCounter from "../../components/QuestCounter/QuestCounter";
import Timer from "../../components/Timer/Timer";
import CardPanel from "../../components/CardPanel/CardPanel";
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
          <Card
            setCurrentQuestId={setCurrentQuestId}
            setQuestPosition={setQuestPosition}
            questPosition={questPosition}
          />
          <CardPanel questPosition={questPosition} />
        </>
      )}
    </div>
  );
};

export default GamePage;
