import axios from "axios";

interface ItopCompleted {
  username: string;
  completedQuests: number;
}

interface ItopPlayed {
  username: string;
  matchesPlayed: number;
}

export const getTopCompleted = async () => {
  const result = await axios.get<ItopCompleted[]>(
    "http://localhost:5000/statistics/getStat/topCompleted"
  );

  const data = await result.data;

  return data;
};

export const getTopPlayed = async () => {
  const result = await axios.get<ItopPlayed[]>(
    "http://localhost:5000/statistics/getStat/topPlayed"
  );

  const data = await result.data;

  return data;
};
