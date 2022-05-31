import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from '../Components/About/About';
import Blogs from '../Components/Blogs/Blogs';
import Dashboard from '../Components/Dashboard/Dashboard';
import Home from '../Components/Home/Home';
import NotFound from '../Components/NotFound/NotFound';
import AllReviews from '../Components/AllReviews/AllReviews';

const AllRoutes = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home></Home>}></Route>
                <Route path='/home' element={<Home></Home>}></Route>
                <Route path='/allreviews' element={<AllReviews></AllReviews>}></Route>
                <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
                <Route path='/blogs' element={<Blogs></Blogs>}></Route>
                <Route path='/about' element={<About></About>}></Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    );
};

export default AllRoutes;