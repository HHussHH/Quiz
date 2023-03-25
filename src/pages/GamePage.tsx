import Card from "../components/Card/Card";
import QuestCounter from "../components/Card/QuestCounter";
import Timer from "../components/Card/Timer";
import { selectFinish } from "../features/endGame/finishSlice";
import { useAppSelector } from "../store";
import styles from "./gamepage.module.scss";
import { useState } from "react";
const GamePage = () => {
  const [currentQuestId, setCurrentQuestId] = useState<number>(10);
  const [questPosition, setQuestPosition] = useState<number>(1);

  const { isFinish } = useAppSelector(selectFinish);
  return (
    <div className={styles.field}>
      {isFinish ? "" : <Timer currentQuestId={currentQuestId} />}
      {isFinish ? (
        ""
      ) : (
        <Card
          setCurrentQuestId={setCurrentQuestId}
          setQuestPosition={setQuestPosition}
          questPosition={questPosition}
        />
      )}
      <QuestCounter questPosition={questPosition} />
    </div>
  );
};

export default GamePage;
