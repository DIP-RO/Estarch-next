import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthProvider";
import { useRouter } from 'next/navigation';
import baseUrl from "../services/baseUrl";

const useLogout = () => {
	const [loading, setLoading] = useState(false);
	const { setAuthUser } = useContext(AuthContext);
	const router = useRouter();

	const logout = async () => {
		setLoading(true);
		try {
			const res = await fetch(`${baseUrl}/api/auth/logout`, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				
			});
			const data = await res.json();
			if (data.error) {
				throw new Error(data.error);
			}
			localStorage.removeItem("userId");
			setAuthUser(null);
		} catch (error) {
			toast.error(error.message);
		} finally {
			setLoading(false);
            router.push('/login')

		}
	};

	return { loading, logout };
};
export default useLogout;