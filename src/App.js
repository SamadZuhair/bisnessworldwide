import "./App.css";
import Nav from "./Components/Header/Nav";
import Home from "./Components/Home/Home";
import Inner from "./Components/InnerPges/Inner";
import Futers from "./Components/Fuaters/Futers";
import Footer from "./Components/Fotter/Footer";

function App() {
  return (
    <div className="">
      <Nav />

      <Home />
      <Inner />
      <Futers />
      <Footer />
    </div>
  );
}

export default App;
