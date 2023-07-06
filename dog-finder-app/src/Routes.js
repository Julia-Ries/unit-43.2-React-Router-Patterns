import React from 'react';
import {Route, Routes, Switch, Navigate} from 'react-router-dom';
import DogDetails from './DogDetails';
import Home from './Home';


function RoutesList(){
    return (
        <switch>
            <Routes>
                <Route exact path='/' element={<Home/>} />
                <Route exact path='/dogs/:name' element={<DogDetails/>} />
            </Routes>
            <Navigate to='/'/>

        </switch>
    );
}

export default RoutesList;