import React from 'react';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import {routes} from "./routes";
import Layout from "../layout/Layout";
import Landing from "../pages/Landing/Landing";
import Trains from "../pages/Trains/Trains";

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index path='/' element={<Landing />}/>
                    <Route path='/station/:id' element={<Trains/>}/>
                    {routes.map(route => <Route key={route.path} path={route.path} element={<route.element />}/>)}
                    <Route path="*" element={<Navigate to='/'/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;