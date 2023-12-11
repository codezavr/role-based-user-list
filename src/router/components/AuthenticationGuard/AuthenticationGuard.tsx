import * as React from 'react';
import { ProtectedRoute } from '../ProtectedRoute/ProtectedRoute';
import { useAuth } from '../../../domains/auth/auth';

export type AuthenticationGuardProps = {
    children?: React.ReactElement;
    redirectPath?: string;
    guardType?: 'authenticated' | 'unauthenticated';
};

export const AuthenticationGuard: React.FC<AuthenticationGuardProps> = ({
                                                                            redirectPath = '/',
                                                                            guardType = 'authenticated',
                                                                            ...props
                                                                        }) => {
    const { user } = useAuth();
    const isAllowed = guardType === 'authenticated' ? !!user : !user;

    return (
        <ProtectedRoute
            redirectPath={ redirectPath }
            isAllowed={ isAllowed }
            { ...props }
        />
    );
};
