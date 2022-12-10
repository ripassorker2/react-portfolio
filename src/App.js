import "./App.css";
import Home from "./Pages/Home/Home/Home";
import Footer from "./Pages/Shared/Footer/Footer";
import Navbar from "./Pages/Shared/Navbar/Navbar";

function App() {
  return (
    <div className="lg:max-w-screen-xl mx-auto">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
