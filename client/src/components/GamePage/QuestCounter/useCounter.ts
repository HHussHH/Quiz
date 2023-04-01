import { selectQuest } from "../../../features/question/quest-slice";
import { selectCountAnswer } from "../../../features/selectAnswer/answer-slice";
import { useAppSelector } from "../../../store";

export const useCounter = () => {
  const { list } = useAppSelector(selectQuest);
  const countCurrentAnswers = useAppSelector(selectCountAnswer);
  return [list.length, countCurrentAnswers];
};
