

import { Route, Routes } from 'react-router';
import HomeLayout from '../layout/HomeLayout';
import HomePage from '../page/HomePage';
import Colleges from '../page/Colleges';
import Admission from '../page/Admission';
import MyCollege from '../page/MyCollege';
import CollegesDetails from '../page/CollegesDetails';
import Register from '../page/Authentication/Register';
import Login from '../page/Authentication/Login';
import Profile from '../page/Profile';
import NotFound from '../shared/NotFound';
import ResearchPapers from '../page/ResearchPapers';

const RouteProvider = () => {
    return (
        <div>
            <Routes>
                {/* error message */}
                <Route path='*' element={<NotFound/>}/>
                <Route path='/' element={<HomeLayout/>}>
                <Route path='/' element={<HomePage/>}></Route>
                <Route path='/colleges' element={<Colleges/>} />
                <Route path={`/colleges/:id`} element={<CollegesDetails/>}/>
                <Route path='/admission' element={<Admission/>} />
                <Route path='my_colleges' element={<MyCollege/>} />
                <Route path='/register' element={<Register/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/profile' element={<Profile/>}/>
                <Route path='/research_papers/:paperId' element={<ResearchPapers/>}/>
                
                </Route>
                
            </Routes>
            
        </div>
    );
};

export default RouteProvider;