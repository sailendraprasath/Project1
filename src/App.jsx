import "./App.css";

import Wowww from "./Components/Wowww";
import Category from "./Components/Category";
import Food from "./Components/Food";
import Footer from "./Components/Footer";
import HeadLineCards from "./Components/HeadLineCards";
// import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";



function App() {
  return (
    <>
    <div className="bg-slate-900/40">
    <Navbar/>
     <Wowww/>
     {/* <Hero/> */}
     <HeadLineCards/>
     <Food/>
     <Category/>
     <Footer/>
    </div>

   
    
     
    </>
  );
}

export default App;
