import { useMutation } from '@tanstack/vue-query';
import Api from "../../services/api.ts";

interface LoginReqest {
    username: string
    password: string
}

export const useLogin = () => {
    return useMutation({
        mutationFn: async (data: LoginReqest) => {
            const response = await Api.post('/api/login', data);
            return response.data
        }
    })
}