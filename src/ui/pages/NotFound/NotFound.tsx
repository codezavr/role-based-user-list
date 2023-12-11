import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const NotFound = () => {
    return (
        <Grid container component="main" sx={ { height: '100vh' } }>
            <Grid
                item
                xs={ 12 }
            >
                <Box
                    sx={ {
                        my: 8,
                        mx: 4,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    } }
                >
                    <Typography component="h1" variant="h5">
                        404 - page not found
                    </Typography>
                </Box>
            </Grid>
        </Grid>
    );
};

export default NotFound;
