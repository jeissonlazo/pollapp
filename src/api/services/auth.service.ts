import { api } from '@/api/axios';
import type {
    UserCreateRequest,
    UserResponse,
} from '@/types/auth.types';

export class AuthService {
    static async register(
        payload: UserCreateRequest
    ): Promise<UserResponse> {
        const response = await api.post<UserResponse>(
            '/users',
            payload
        );

        return response.data;
    }
}