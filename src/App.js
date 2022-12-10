import "./App.css";
import Home from "./Pages/Home/Home/Home";
import Navbar from "./Pages/Shared/Navbar/Navbar";

function App() {
  return (
    <div className="lg:max-w-screen-xl mx-auto">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
