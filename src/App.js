import "./App.css";
import Home from "./Pages/Home/Home/Home";
import Navbar from "./Pages/Shared/Navbar/Navbar";
import Skills from "./Pages/Skills/Skills";

function App() {
  return (
    <div className="lg:max-w-screen-xl mx-auto">
      <Navbar />
      <Home />
      <Skills />
    </div>
  );
}

export default App;
