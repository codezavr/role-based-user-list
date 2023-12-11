import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../../domains/auth/auth';
import { usersPath } from '../../../router/paths';
import { useNotifications } from '../../../domains/notifications/notifications';
import { UserToLogin } from '../../types/user';


const SignInSide = () => {
    const { openAndNotify } = useNotifications();
    const navigate = useNavigate();
    const location = useLocation();
    const { login } = useAuth();
    const from = location.state?.from?.pathname || `/${ usersPath }`;

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const data = new FormData(event.currentTarget);
        try {
            await login({ login: data.get('login'), password: data.get('password') } as UserToLogin);
            navigate(from, { replace: true })
        } catch (e) {
            openAndNotify(e as string);
        }
    };

    return (
        <Grid container component="main" sx={ { height: '100vh' } }>
            <Grid
                item
                xs={ false }
                sm={ 4 }
                md={ 8 }
                sx={ {
                    backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
                    backgroundRepeat: 'no-repeat',
                    backgroundColor: (t) =>
                        t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                } }
            />
            <Grid item xs={ 12 } sm={ 8 } md={ 4 } component={ Paper } elevation={ 6 } square>
                <Box
                    sx={ {
                        my: 8,
                        mx: 4,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    } }
                >
                    <Avatar sx={ { m: 1, bgcolor: 'secondary.main' } }>
                        <LockOutlinedIcon/>
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <Box component="form" noValidate onSubmit={ handleSubmit } sx={ { mt: 1 } }>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="login"
                            label="Login"
                            id="login"
                            autoComplete="login"
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={ { mt: 3, mb: 2 } }
                        >
                            Sign In
                        </Button>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    );
}

export default SignInSide;
