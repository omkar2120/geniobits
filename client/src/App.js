import { BrowserRouter, Routes,Route } from 'react-router-dom';
import './App.css';
import Navbar from './component/Navbar';
import Login from './component/Login';
import Register from './component/Register';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar/>}/>
          <Route  path="/login" element={<Login/>}/>
          <Route path="/adduser" element={<Register/>} />
        </Routes>
      </BrowserRouter>



    </div>
  );
}

export default App;
