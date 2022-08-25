import './App.css';
import Table from "./components/table/Table";
import { BrowserRouter, Link } from "react-router-dom";
import ModalBox from './components/modal/Modal';
import { useState } from 'react';
// import Button from '@mui/material/Button';
// import AddIcon from '@mui/icons-material/Add';

function App() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
     <BrowserRouter>
    <div className="container">
      <Table handleClickOpen={handleClickOpen} />
     <ModalBox open={open} handleClose={handleClose} />
     </div> 

     <p className='comment'>Made with <span>❤</span> by <Link to="/" onClick={() => { window.location.href= 'https://github.com/OnabajoOluwakeji'; }} >Oluwakeji Onabajo</Link></p>
    
    </BrowserRouter>
  );
}

export default App;
