import React from 'react';
import { AppBar, Toolbar } from '@mui/material';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useAuth } from '../../../domains/auth/auth';

const AppBarMain = () => {
    const { isUserAdmin, isUserSuperAdmin } = useAuth();

    const { user, logout } = useAuth();

    const handleLogout = () => {
        if (user) logout();
    }

    return (
        <AppBar
            position="static"
            elevation={ 0 }
            sx={ { borderBottom: (theme) => `1px solid ${ theme.palette.divider }` } }
        >
            <Toolbar sx={ { flexWrap: 'wrap' } }>
                <Typography variant="h6" color="inherit" noWrap sx={ { flexGrow: 1 } }>
                    { (isUserAdmin || isUserSuperAdmin) ? 'Admin panel' : 'Panel' }
                </Typography>
                <Button href="#" color="inherit" sx={ { my: 1, mx: 1.5 } } onClick={ handleLogout }>
                    { user ? 'Logout' : 'Login' }
                </Button>
            </Toolbar>
        </AppBar>
    );
};

export default AppBarMain;
