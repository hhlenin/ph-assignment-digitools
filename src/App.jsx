import './App.css'
import {ToastContainer, toast, Bounce} from 'react-toastify';
import Navbar from "./components/navbar/Navbar.jsx";

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
    </>
  )
}

export default App
