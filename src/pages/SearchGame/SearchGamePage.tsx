import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import NavBar from "../../components/NavBar/NavBar";
import SearchGameCard from "../../components/SearchGame/Card/SearchGameCard";
import CardGroup from "../../components/SearchGame/CardGroup/CardGroup";
import styles from "./searchGame.module.scss";
const SearchGamePage = () => {
  return (
    <div>
      <NavBar />
      <CardGroup />
      <Footer />
    </div>
  );
};

export default SearchGamePage;
