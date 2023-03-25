import Card from "../components/Card/Card";
import QuestCounter from "../components/Card/QuestCounter";
import Timer from "../components/Card/Timer";
import styles from "./gamepage.module.scss";
import { useState } from "react";
const GamePage = () => {
  const [currentQuestId, setCurrentQuestId] = useState<number>(10);
  const [questPosition, setQuestPosition] = useState<number>(1);
  return (
    <div className={styles.field}>
      <Timer currentQuestId={currentQuestId} />
      <Card
        setCurrentQuestId={setCurrentQuestId}
        setQuestPosition={setQuestPosition}
        questPosition={questPosition}
      />
      <QuestCounter questPosition={questPosition} />
    </div>
  );
};

export default GamePage;
