import { useQuery } from '@tanstack/vue-query'
import Api from "../../services/api.ts";
import Cookies from "js-cookie";

export interface User {
    id: string;
    name: string;
    username: string;
    email: string;
}

export const useUsers = () => {
    return useQuery<User[], Error>({
        queryKey: ['users'],
        queryFn: async () => {
            const response = await Api.get('/api/users', {
                headers: {
                    Authorization: `Bearer ${Cookies.get('token')}`
                }
            });
            return response.data.data as User[]
        }
    })
}