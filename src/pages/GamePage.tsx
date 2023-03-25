import Card from "../components/Card/Card";
import Timer from "../components/Card/Timer";
import styles from "./gamepage.module.scss";
import { useState } from "react";
const GamePage = () => {
  const [currentQuestId, setCurrentQuestId] = useState<number>(10);
  return (
    <div className={styles.field}>
      <Timer currentQuestId={currentQuestId} />
      <Card setCurrentQuestId={setCurrentQuestId} />
    </div>
  );
};

export default GamePage;
