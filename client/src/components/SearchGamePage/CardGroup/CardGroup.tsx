import SearchGameCard from "../Card/SearchGameCard";
import styles from "./group.module.scss";
const CardGroup = () => {
  return (
    <div className={styles.group}>
      <SearchGameCard />
      <SearchGameCard />
      <SearchGameCard />
      <SearchGameCard />
      <SearchGameCard />
      <SearchGameCard />
    </div>
  );
};

export default CardGroup;
