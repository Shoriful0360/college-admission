
import React from 'react';
import { Route, Routes } from 'react-router';
import HomeLayout from '../layout/HomeLayout';
import HomePage from '../page/HomePage';
import Colleges from '../page/Colleges';
import Admission from '../page/Admission';
import MyCollege from '../page/MyCollege';

const RouteProvider = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<HomeLayout/>}>
                <Route path='/' element={<HomePage/>}></Route>
                <Route path='/colleges' element={<Colleges/>} />
                <Route path='/admission' element={<Admission/>} />
                <Route path='my_colleges' element={<MyCollege/>} />
                </Route>
                
            </Routes>
            
        </div>
    );
};

export default RouteProvider;