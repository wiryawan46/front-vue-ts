import { useMutation } from '@tanstack/vue-query';
import Api from "../../services/api.ts";

interface RegisterRequest {
    name: string;
    username: string;
    email: string;
    password: string;
}

export const useRegister = () => {
    return useMutation({
        mutationFn: async (data: RegisterRequest) => {
            const response = await Api.post('/api/register', data);
            return response.data
        }
    })
}