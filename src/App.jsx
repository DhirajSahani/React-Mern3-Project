import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './Components/About';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} /> {/* Use Home directly */}
        <Route path='/About' element={<About/>} /> {/* Use Home directly */}
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
