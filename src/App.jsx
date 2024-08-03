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
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
        <div className="fixed top-0 -z-10 h-full w-full"></div>
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF,transparent)]"></div>
      </div>
      <div>
        <Navbar />
        <Wowww />
        {/* <Hero /> */}
        <HeadLineCards />
        <Food />
        <Category />
        <Footer />
      </div>
    </>
  );
}

export default App;
