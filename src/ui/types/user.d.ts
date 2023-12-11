import { AuthUserRoles } from '../constants/auth';

export interface UserData {
    id: number,
    first_name: string,
    last_name: string,
    email: string,
    gender: string,
    ip_address: string,
    friends: UserDataFriend[];
}

interface UserDataFriend {
    id: number,
    name: string;
}

export type UsersData = UserData[];

export type UserToLogin = {
    login: string;
    password: string;
    role: AuthUserRoles
};
