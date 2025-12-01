import { createContext, useContext, ReactNode } from 'react';
import { useAuthStore } from '../store/auth.store';

const AuthContext = createContext<any>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const authStore = useAuthStore();
    return <AuthContext.Provider value={authStore}>{children}</AuthContext.Provider>;
};

export const useAuthContext = () => useContext(AuthContext);
