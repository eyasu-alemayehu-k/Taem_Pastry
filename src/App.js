import "./App.css";
import Home from "./Page/Home/Home";
import Nav from "./Components/Nav/Nav";
import About from "./Page/About/About";
import Menu from "./Page/Menu/Menu";
import Footer from "./Page/Footer/Footer";
import Review from "./Page/Review/Review";
import Service from "./Page/Service/Service";

function App() {
  return (
    <div className="app bg-gray-800 font-mono">
      <Nav />
      <Home />
      <About />
      <Menu />
      <Service />
      <Review />
      <Footer />
    </div>
  );
}

export default App;
