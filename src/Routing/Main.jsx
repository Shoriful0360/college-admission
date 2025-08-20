
import React from 'react';
import { Route, Routes } from 'react-router';
import HomeLayout from '../layout/HomeLayout';
import HomePage from '../page/HomePage';

const RouteProvider = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<HomeLayout/>}>
                <Route path='/' element={<HomePage/>}></Route>
                </Route>
                
            </Routes>
            
        </div>
    );
};

export default RouteProvider;