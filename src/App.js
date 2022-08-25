import './App.css';
import Table from "./components/table/Table";
import { BrowserRouter, Link } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
     <BrowserRouter>
    <div className="container">
      <h4>NAFDAC APPROVAL PORTAL</h4>
      <Table  />
     </div> 

     <p className='comment'>Made with <span>❤</span> by <Link to="/" onClick={() => { window.location.href= 'https://github.com/OnabajoOluwakeji'; }} >Oluwakeji Onabajo</Link></p>
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
/>
    </BrowserRouter>
  );
}

export default App;
