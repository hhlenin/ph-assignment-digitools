import './App.css'
import {ToastContainer, toast, Bounce} from 'react-toastify';
import Navbar from "./components/navbar/Navbar.jsx";
import Hero from "./components/hero/Hero.jsx";
import Achievements from "./components/achievements/Achievements.jsx";

function App() {
    // const notify = () => toast.info('Wow so easy !');

  return (
    <>
            {/*<ToastContainer*/}
            {/*    position="top-center"*/}
            {/*    autoClose={5000}*/}
            {/*    hideProgressBar={false}*/}
            {/*    newestOnTop={false}*/}
            {/*    closeOnClick*/}
            {/*    rtl={false}*/}
            {/*    pauseOnFocusLoss*/}
            {/*    draggable*/}
            {/*    pauseOnHover*/}
            {/*    theme="colored"*/}
            {/*    transition={Bounce}*/}
            {/*/>*/}
            {/*<button onClick={notify}>Notify !</button>*/}

      <Navbar></Navbar>
        <Hero></Hero>
        <Achievements></Achievements>
    </>
  )
}

export default App
