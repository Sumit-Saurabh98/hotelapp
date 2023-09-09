import React from 'react';
import {Routes, Route} from "react-router-dom"
import Homepage from "../pages/Homepage"
import Authentication from '../pages/Authentication';
import HotelDetailsPage from '../pages/HotelDetails';
function PublicRoute(props) {
    return (
        <Routes>
            <Route path='/' element={<Homepage/>} />
            <Route path='/:id' element={<HotelDetailsPage/>} />
            <Route path='/authentication' element={<Authentication/>} />
        </Routes>
    );
}

export default PublicRoute;