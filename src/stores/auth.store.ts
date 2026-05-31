import { defineStore } from 'pinia';
import { AuthService } from '@/api/services/auth.service';
import type { UserCreateRequest } from '@/types/auth.types';

export const useAuthStore = defineStore('auth', {
    state: () => ({
        loading: false,
    }),

    actions: {
        async register(payload: UserCreateRequest) {
            try {
                this.loading = true;

                return await AuthService.register(payload);
            } finally {
                this.loading = false;
            }
        },
    },
});