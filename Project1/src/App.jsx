import "./App.css";
import Category from "./Components/Category";
import Food from "./Components/Food";
import Footer from "./Components/Footer";
import HeadLineCards from "./Components/HeadLineCards";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";


function App() {
  return (
    <>
     <Navbar/>
     <Hero/>
     <HeadLineCards/>
     <Food/>
     <Category/>
     <Footer/>
     
    </>
  );
}

export default App;
