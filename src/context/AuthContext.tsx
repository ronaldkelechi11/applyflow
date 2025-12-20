import * as SecureStore from 'expo-secure-store';
import { createContext, useContext, useEffect, useState } from 'react';
import { login as loginApi, register as registerApi } from '../api/auth.api';

type AuthContextType = {
    user: any;
    token: string | null;
    login: (email: string, password: string) => Promise<void>;
    register: (email: string, password: string) => Promise<void>;
    logout: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType>(null!);

export function AuthProvider({ children
}) {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            const storedToken = await SecureStore.getItemAsync('token');
            if (storedToken) setToken(storedToken);
            setLoading(false);
        })();
    }, []);

    async function login(email: string, password: string) {
        const data = await loginApi(email, password);
        setUser(data.user);
        setToken(data.accessToken);
        await SecureStore.setItemAsync('token', data.accessToken);
    }

    async function register(email: string, password: string) {
        const data = await registerApi(email, password);
        setUser(data.user);
        setToken(data.accessToken);
        await SecureStore.setItemAsync('token', data.accessToken);
    }

    async function logout() {
        setUser(null);
        setToken(null);
        await SecureStore.deleteItemAsync('token');
    }

    if (loading) return null;

    return (
        <AuthContext.Provider value={{ user, token, login, register, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);
