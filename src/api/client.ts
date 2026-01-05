import axios from 'axios';
import * as SecureStore from 'expo-secure-store';
const apiUrl = "http://127.0.0.1:3000/"

export const axiosInstance = axios.create({
    baseURL: apiUrl,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
});

const axiosAuthenticatedInstance = axios.create({
    baseURL: apiUrl,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Add accessToken to HEADER-AUTHORIZATION
const setAuthHeader = (token: string | null) => {
    if (token) {
        axiosAuthenticatedInstance.defaults.headers['Authorization'] = `Bearer ${token}`;
    } else {
        delete axiosAuthenticatedInstance.defaults.headers['Authorization'];
    }
};

// Set Token
export const setTokens = async (token: string) => {
    await SecureStore.setItemAsync('accessToken', token);
    setAuthHeader(token);
};

// Fetch Token
export const getStoredTokens = async () => ({
    accessToken: await SecureStore.getItemAsync('accessToken'),
});

// Clear Token
export const clearTokens = async () => {
    await SecureStore.deleteItemAsync('accessToken');
    setAuthHeader(null);
};

// Initialize auth header from stored token
export const initializeAuth = async () => {
    try {
        const storedToken = await SecureStore.getItemAsync('accessToken');
        if (storedToken) {
            setAuthHeader(storedToken);
        }
    } catch (error) {
        console.error('Failed to initialize auth:', error);
    }
};


// Authentication Route handlers
export async function register(email: string, password: string) {
    try {
        const response = await axiosInstance.post('/register', {
            email,
            password,
        });

        if (response.data?.token) {
            await setTokens(response.data.token);
        }

        return response.data;
    } catch (error) {
        console.error('Registration error:', error);
        throw error;
    }
}
export async function login(email: string, password: string) {
    try {
        const response = await axiosInstance.post('/login', {
            email,
            password,
        });

        if (response.data?.token) {
            await setTokens(response.data.token);
        }

        return response.data;
    } catch (error) {
        console.error('Login error:', error);
        throw error;
    }
}
