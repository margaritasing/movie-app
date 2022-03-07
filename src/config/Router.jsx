import React from 'react';


import { BrowserRouter, Route, Routes,  Navigate } from 'react-router-dom';

import Home from '../pages/Home';
import Catalog from '../pages/Catalog';
import Detail from '../pages/detail/Detail';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/:category/search/:keyword'  element={<Catalog/>}/>
                <Route path='/:category/:id' element={<Detail/>}/>
                <Route path='/:category' element={<Catalog/>} />
                <Route path='/home'  element={<Home/>}/>
                <Route path="*" element={<Navigate to="home"/>}/>                          
            </Routes>          
        </BrowserRouter>
    );
}

export default Router;
