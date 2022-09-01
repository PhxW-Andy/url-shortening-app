// import components
import Nav from "./components/Nav";
import Header from "./components/Header";
import AdvancedStatistics from "./components/AdvancedStatistics";

// import styles
import "../src/scss/style.scss";

const App = () => {
  return (
    <div className="container-lg">
      <Nav />
      <Header />
      <AdvancedStatistics />
    </div>
  );
};

export default App;
