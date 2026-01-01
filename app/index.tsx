import { getStoredTokens, initializeAuth } from '@/src/api/client';
import { router } from 'expo-router';
import { useEffect } from 'react';
import { StatusBar } from 'react-native';

export default function Index() {
    useEffect(() => {
        checkAuthStatus();
    }, []);

    const checkAuthStatus = async () => {
        await initializeAuth();
        const { accessToken } = await getStoredTokens();

        if (accessToken) {
            router.replace('/(app)/dashboard');
        } else {
            router.replace('/(auth)/login');
        }
    };

    return <StatusBar barStyle={"light-content"} />
}