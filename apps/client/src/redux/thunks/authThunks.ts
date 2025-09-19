import { createAsyncThunk, AsyncThunk } from '@reduxjs/toolkit';
import { login, register, IRegisterData, fetchCurrentUser, IUser } from '../../services/api';
import type { RootState } from '../store';

interface LoginCredentials {
    email: string;
    password: string;
}

export const loginUserThunk: AsyncThunk<{ token: string; user: IUser }, LoginCredentials, { state: RootState }> = createAsyncThunk(
    'auth/loginUser',
    async (credentials: LoginCredentials, thunkAPI) => {
        try {
            const loginDataRes = await login(credentials);

            const { token, user } = loginDataRes
            localStorage.setItem('token', token);
            return { token, user };
        } catch (error: unknown) {
            const errorMessage = error instanceof Error && 'response' in error
                ? (error as { response?: { data?: { message?: string } } }).response?.data?.message
                : 'Login failed';
            return thunkAPI.rejectWithValue(errorMessage || 'Login failed');
        }
    }
);

export const registerUserThunk: AsyncThunk<{ token: string; user: IUser }, IRegisterData, { state: RootState }> = createAsyncThunk(
    'auth/registerUser',
    async (userData: IRegisterData, thunkAPI) => {
        try {
            const formData = new FormData();
            Object.entries(userData).forEach(([key, value]) => {
                if (value !== undefined && value !== null) {
                    if (key === 'image' && value instanceof File) {
                        formData.append(key, value);
                    } else {
                        formData.append(key, value as string);
                    }
                }
            });
            const { token, user } = await register(formData);
            localStorage.setItem('token', token);
            return { token, user };
        } catch (error: unknown) {
            const errorMessage = error instanceof Error && 'response' in error
                ? (error as { response?: { data?: { message?: string } } }).response?.data?.message
                : 'Registration failed';
            return thunkAPI.rejectWithValue(errorMessage || 'Registration failed');
        }
    }
);

export const loadUserFromTokenThunk: AsyncThunk<{ token: string; user: IUser }, void, { state: RootState }> = createAsyncThunk(
    'auth/loadUserFromToken',
    async (_, thunkAPI) => {
        try {
            const token = localStorage.getItem('token');
            if (!token) {
                return thunkAPI.rejectWithValue('No token found');
            }
            const { user } = await fetchCurrentUser();
            return { token, user };
        } catch {
            return thunkAPI.rejectWithValue('Failed to load user from token');
        }
    }
);
