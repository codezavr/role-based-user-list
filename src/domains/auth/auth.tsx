import { mockAuthService } from '../../services/mockAuth.service';
import { createContext, FC, ReactNode, useContext, useMemo, useState } from 'react';
import { UserToLogin } from '../../ui/types/user';
import { AuthUserRoles } from '../../ui/constants/auth';

interface AuthContextValues {
    user: UserToLogin | null;
    login: (payload: UserToLogin) => void;
    logout: () => void;
    isUserAdmin?: boolean;
    isUserSuperAdmin?: boolean;
}

const AuthContext = createContext<AuthContextValues>({
    user: null,
    login: () => {
    },
    logout: () => {
    },
});

export const AuthProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<UserToLogin | null>(null);

    const isUserAdmin = useMemo(() => user?.role === AuthUserRoles.ADMIN, [user]);
    const isUserSuperAdmin = useMemo(() => user?.role === AuthUserRoles.SUPER_ADMIN, [user]);

    const login = async (payload: UserToLogin) => {
        const user = await mockAuthService.login(payload);
        setUser(user);
    };

    const logout = () => setUser(null);

    return (
        <AuthContext.Provider value={ { user, login, logout, isUserAdmin, isUserSuperAdmin } }>
            { children }
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
