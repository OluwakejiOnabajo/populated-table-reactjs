import './App.css';
import Table from "./components/table/Table";
import { BrowserRouter, Link } from "react-router-dom";

function App() {
  return (
     <BrowserRouter>
    <div className="container">
      <Table />
      <p className='comment'>Made with <span>❤</span> by <Link to="/" onClick={() => { window.location.href= 'https://github.com/OnabajoOluwakeji'; }} >Oluwakeji Onabajo</Link></p>
    </div>
    </BrowserRouter>
  );
}

export default App;
