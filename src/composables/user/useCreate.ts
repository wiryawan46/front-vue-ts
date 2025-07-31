import { useMutation } from '@tanstack/vue-query';
import Api from "../../services/api.ts";
import Cookies from "js-cookie";

interface UserRequest {
    name: string;
    username: string;
    email: string;
    password: string;
}

export const useUserCreate = () => {
    return useMutation({
        mutationFn: async (data: UserRequest) => {
            const toke = Cookies.get('token');
            const response = await Api.post('/api/users', data, {
                headers: {
                    Authorization: `Bearer ${toke}`
                }
            });
            return response.data
        }
    })
}