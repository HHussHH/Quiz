import styles from "./rules.module.scss";
import { ReactComponent as CubeIcon } from "../../../img/cube.svg";
import { ReactComponent as IdeaIcon } from "../../../img/newIdea.svg";
import { ReactComponent as CupIcon } from "../../../img/cup.svg";
import { ReactComponent as FriendsIcon } from "../../../img/friends.svg";
import { ReactComponent as BoxIcon } from "../../../img/box.svg";
import { ReactComponent as WorldIcon } from "../../../img/world.svg";
const Rules = () => {
  return (
    <div className={styles.body}>
      <h2 className={styles.rules_title}>Что вам у нас понравится?</h2>
      <div className={styles.rules}>
        <div className={styles.rule}>
          <CubeIcon className={styles.rule_icon} />
          <h3 className={styles.rule_title}>Это бесплатно!</h3>
          <p className={styles.rule_text}>
            Просто регистрируй аккаунт и вперед к победе!
          </p>
        </div>

        <div className={styles.rule}>
          <IdeaIcon className={styles.rule_icon} />
          <h3 className={styles.rule_title}>Прояви себя!</h3>
          <p className={styles.rule_text}>
            В ходе игры ты сможешь доказать всем свой уровень знаний.
          </p>
        </div>

        <div className={styles.rule}>
          <CupIcon className={styles.rule_icon} />
          <h3 className={styles.rule_title}>Соревнуйся!</h3>
          <p className={styles.rule_text}>
            У нас есть соревновательные режими, где ты можешь доказать, что ты
            самый умный на этой планете.
          </p>
        </div>

        <div className={styles.rule}>
          <FriendsIcon className={styles.rule_icon} />
          <h3 className={styles.rule_title}>Знакомься!</h3>
          <p className={styles.rule_text}>
            Находи новых друзей и заводи с ними разговоры.
          </p>
        </div>

        <div className={styles.rule}>
          <BoxIcon className={styles.rule_icon} />
          <h3 className={styles.rule_title}>Собери коллекцию!</h3>
          <p className={styles.rule_text}>
            Собери собственную коллекцию уникальных 3D полей для игры.
          </p>
        </div>

        <div className={styles.rule}>
          <WorldIcon className={styles.rule_icon} />
          <h3 className={styles.rule_title}>Играй в любой точке!</h3>
          <p className={styles.rule_text}>
            В игру могут играть люди из разных стран, твои соперники могут быть
            откуда угодно!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Rules;
