import React, { createContext, FC, ReactNode, useContext, useState } from 'react';
import { Alert, Snackbar } from '@mui/material';

interface AuthContextValues {
    openAndNotify: (message: string) => void;
    closeNotify: () => void;
}

const NotificationsContext = createContext<AuthContextValues>({
    openAndNotify: () => {
    },
    closeNotify: () => {
    },
});

export const NotificationsProvider: FC<{ children: ReactNode }> = ({ children }) => {

    const [isOpen, setIsOpen] = useState(false);
    const [message, setMessage] = useState('');

    const closeNotify = () => {
        setIsOpen(false);
    }

    const openAndNotify = (message: string) => {
        setMessage(message);
        setIsOpen(true);
    }


    return (
        <NotificationsContext.Provider value={ { openAndNotify, closeNotify } }>
            { children }
            <Snackbar
                open={ isOpen }
                autoHideDuration={ 5000 }
                onClose={ closeNotify }
                anchorOrigin={ { vertical: 'bottom', horizontal: 'right' } }
            >
                <Alert severity="error">{ message }</Alert>
            </Snackbar>
        </NotificationsContext.Provider>
    );
};

export const useNotifications = () => useContext(NotificationsContext);
