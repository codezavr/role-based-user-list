import React from 'react';
import { CircularProgress } from '@mui/material';
import Box from '@mui/material/Box';

const CircularProgressLoader = () => {
    return (
        <Box sx={ { display: 'flex', justifyContent: 'center', my: 8 } }>
            <CircularProgress/>
        </Box>
    );
};

export default CircularProgressLoader;
