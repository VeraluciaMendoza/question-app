import Header from "../components/Header";
import OptionsGrid from "../components/OptionsGrid";
import Ranking from "../components/Ranking";

const HomePage = () => {
  return (
    <>
      <Header/>
      <Ranking ranking={348} points={1209}/>
      <OptionsGrid/>
    </>
  )
}

export default HomePage;