import React, { Suspense } from 'react';
import { Container } from '@mui/material';
import { Outlet } from 'react-router-dom';
import AppBarMain from '../../components/AppBarMain/AppBarMain';

const CommonLayout = () => {
    return (
        <>
            <AppBarMain/>
            <Container maxWidth="md" component="main" sx={ {
                my: 8
            } }>
                <Suspense fallback={ <></> }>
                    <Outlet/>
                </Suspense>
            </Container>

        </>
    );
};

export default CommonLayout;
