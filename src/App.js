import './App.css';
import Table from "./components/table/Table";
import { BrowserRouter, Link } from "react-router-dom";
import DataBox from './components/dialogBox/AddData';
import { useState } from 'react';

function App() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = () => {

  }

  return (
     <BrowserRouter>
    <div className="container">
      <Table handleClickOpen={handleClickOpen} />
     <DataBox open={open} handleClose={handleClose}  handleSave={handleSave} />
     </div> 

     <p className='comment'>Made with <span>❤</span> by <Link to="/" onClick={() => { window.location.href= 'https://github.com/OnabajoOluwakeji'; }} >Oluwakeji Onabajo</Link></p>
    
    </BrowserRouter>
  );
}

export default App;
