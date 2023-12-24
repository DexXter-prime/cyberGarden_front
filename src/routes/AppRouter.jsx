import React from 'react';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import {routes} from "./routes";
import Layout from "../layout/Layout";
import Landing from "../pages/Landing/Landing";
import Trains from "../pages/Trains/Trains";
import AppContextProvider from "../hoc/AppContextProvider";
import RequireAuth from "../hoc/RequireAuth";

const AppRouter = () => {
    return (
        <AppContextProvider>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Layout />}>
                        <Route index path='/' element={<Landing />}/>
                            <Route path='/station/:id' element={
                                <RequireAuth>
                                    <Trains/>
                                </RequireAuth>
                            }/>
                        {routes.map(route => <Route key={route.path} path={route.path} element={
                            route.isPrivate ?
                                <RequireAuth>
                                    <route.element />
                                </RequireAuth>
                                :
                                <route.element />
                        }/>)}
                        <Route path="*" element={<Navigate to='/'/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </AppContextProvider>
    );
};

export default AppRouter;