import TableContainer from '@mui/material/TableContainer/TableContainer';
import React, { useCallback, useEffect, useState } from 'react';
import Paper from '@mui/material/Paper';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import Typography from '@mui/material/Typography';
import CircularProgressLoader from '../../components/CircularProgressLoader/CircularProgressLoader';
import { userService } from '../../../services/user.service';
import { useAuth } from '../../../domains/auth/auth';
import { UserData, UsersData } from '../../types/user';
import { useNotifications } from '../../../domains/notifications/notifications';

const UsersList = () => {
    const { openAndNotify } = useNotifications();
    const { isUserAdmin, isUserSuperAdmin } = useAuth();
    const [users, setUsers] = useState<UsersData>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const getUsersData = useCallback(async () => {
        setIsLoading(true);
        try {
            const users = await userService.getUsers();
            setUsers(users);
        } catch (e) {
            openAndNotify(e as string);
        } finally {
            setIsLoading(false);
        }

    }, [openAndNotify])

    useEffect(() => {
        getUsersData();
    }, [getUsersData]);

    if (isLoading) {
        return <CircularProgressLoader/>;
    }

    return (
        <>
            <Typography variant="h5" gutterBottom sx={ { mb: '20px' } }>
                Role based user list
            </Typography>
            <TableContainer component={ Paper }>
                <Table sx={ { minWidth: 650 } } aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Id</TableCell>
                            <TableCell align="right">First Name</TableCell>
                            <TableCell align="right">Last Name</TableCell>
                            { (isUserSuperAdmin || isUserAdmin) && <TableCell align="right">Email</TableCell> }
                            <TableCell align="right">Gender</TableCell>
                            { isUserAdmin && <TableCell align="right">IP address</TableCell> }
                            <TableCell align="right">Friends</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        { users.map((row: UserData) => (
                            <TableRow
                                key={ row.id }
                                sx={ { '&:last-child td, &:last-child th': { border: 0 } } }
                            >
                                <TableCell component="th" scope="row">
                                    { row.id }
                                </TableCell>
                                <TableCell align="right">{ row.first_name }</TableCell>
                                <TableCell align="right">{ row.last_name }</TableCell>
                                { (isUserSuperAdmin || isUserAdmin) && <TableCell align="right">{ row.email }</TableCell> }
                                <TableCell align="right">{ row.gender }</TableCell>
                                { isUserAdmin &&
                                    <TableCell align="right">{ row.ip_address }</TableCell> }
                                <TableCell align="right">
                                    { row.friends && row.friends.map((friend, index, arr) => {
                                        return <span key={ index }>{ friend.name }{ index === arr.length - 1 ? '' : ',' } </span>;
                                    }) }
                                </TableCell>
                            </TableRow>
                        )) }
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )

};

export default UsersList;
