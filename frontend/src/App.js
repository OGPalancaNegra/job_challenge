import './App.css';
import {BrowserRouter, Routes, Route, Redirect, redirect } from 'react-router-dom'
import Index from './pages/Index';


function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index/>}></Route>
   
    </Routes>
  </BrowserRouter>
  );
}

export default App;
