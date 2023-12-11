import React, { lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { usersPath } from './paths';
import { AuthenticationGuard } from './components/AuthenticationGuard/AuthenticationGuard';
import CommonLayout from '../ui/pages/CommonLayout/CommonLayout';
import NotFound from '../ui/pages/NotFound/NotFound';

const AsyncSignIn = lazy(() => import('../ui/pages/SignInSide/SignInSide'));
const AsyncUsers = lazy(() => import('../ui/pages/UsersList/UsersList'));

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={ <AsyncSignIn/> }/>
                <Route element={ <AuthenticationGuard/> }>
                    <Route element={ <CommonLayout/> }>
                        <Route path={ usersPath } element={ <AsyncUsers/> }/>
                        <Route path="*" element={ <NotFound/> }/>
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;
