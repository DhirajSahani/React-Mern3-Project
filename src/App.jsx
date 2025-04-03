import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';




function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home/>} />
        {/* <Route path='/create' element={<CreateBlog/>} />
        <Route path='/blog/:id' element={<SingleBlog />} />
        <Route path='/edit/:id' element={<EditBlog />} />
         */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
