import { AuthUserRoles } from '../ui/constants/auth';
import { UserToLogin } from '../ui/types/user';

class MockAuthService {

    registeredUsers = [
        { login: 'admin', password: 'admin', role: AuthUserRoles.ADMIN },
        { login: 'super_admin', password: 'super_admin', role: AuthUserRoles.SUPER_ADMIN },
        { login: 'user', password: 'user', role: AuthUserRoles.USER },
    ]
    isAuthenticated = false;

    async login(payload: UserToLogin) {
        return new Promise<UserToLogin>((resolve, reject) => {
            const foundUser = this.registeredUsers.find(
                (user) => user.login === payload.login && user.password === payload.password
            );
            if (!!foundUser) {
                setTimeout(() => {
                    this.isAuthenticated = true;
                    resolve(foundUser);
                }, 100);
            } else {
                reject('You have entered an invalid login or password')
            }
        });
    }
}

export const mockAuthService = new MockAuthService();
