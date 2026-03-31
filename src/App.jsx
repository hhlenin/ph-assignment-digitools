import './App.css'
import {ToastContainer, Bounce} from 'react-toastify';
import {useState} from "react";

import Navbar from "./components/navbar/Navbar.jsx";
import Hero from "./components/hero/Hero.jsx";
import Achievements from "./components/achievements/Achievements.jsx";
import DigitalTools from "./components/digital-tools/DigitalTools.jsx";
import GetStarted from "./components/get-started/GetStarted.jsx";
import Pricing from "./components/pricing/Pricing.jsx";
import TransformWorkFlow from "./components/transform-workflow/TransformWorkFlow.jsx";
import Footer from "./components/footer/Footer.jsx";


function App() {
    const [totalCartItems, setTotalCartItems] = useState(0);


  return (
    <>
        <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
            transition={Bounce}
            />
        <Navbar
          totalCartItems={totalCartItems}
        ></Navbar>
        <Hero></Hero>
        <Achievements></Achievements>
        <DigitalTools
            totalCartItems={totalCartItems}
            setTotalCartItems={setTotalCartItems}
        ></DigitalTools>
        <GetStarted></GetStarted>
        <Pricing></Pricing>
        <TransformWorkFlow></TransformWorkFlow>
        <Footer></Footer>
    </>
  )
}

export default App
