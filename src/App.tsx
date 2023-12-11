import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { AuthProvider } from './domains/auth/auth';
import AppRouter from './router/AppRouter';
import { NotificationsProvider } from './domains/notifications/notifications';


const defaultTheme = createTheme();

function App() {
    return (
        <ThemeProvider theme={ defaultTheme }>
            <CssBaseline/>
            <AuthProvider>
                <NotificationsProvider>
                    <AppRouter/>
                </NotificationsProvider>
            </AuthProvider>
        </ThemeProvider>
    );
}

export default App;
