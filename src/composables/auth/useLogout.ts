import Cookies from "js-cookie";
import {useRouter} from "vue-router";

export const useLogout = (): (() => void) => {
    const router = useRouter();
    return (): void => {
        Cookies.remove("token");
        Cookies.remove("user");
        router.push("/login");
    }
}