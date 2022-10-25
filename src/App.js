import "./Styles/App.css";
import Navbaros from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Mainbody from "./components/Main_body.jsx";
import Description from "./components/Description";
import Comp from "./components/Comp";

function App() {
  return (
    <>
      <Navbaros />
      <Mainbody />
      <Description />
      <Comp />
      <Footer />
    </>
  );
}

export default App;
