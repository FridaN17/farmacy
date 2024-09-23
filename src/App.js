import React from 'react';
import './App.css';
import Index from "./Main Home/Index"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RrethNesh from './Pages/Aboutus/RrethNesh';
import Products from './Pages/Products/Products';
import Oferta from './Pages/Oferta/Oferta';

function App(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Index/>}/>
            <Route path='/aboutus' element={<RrethNesh/>}/>
            <Route path='/category' element={<Products/>}/>
            <Route path='/oferta' element={<Oferta/>}/>
        </Routes>
        
        </BrowserRouter>
)
    
}

export default App;
