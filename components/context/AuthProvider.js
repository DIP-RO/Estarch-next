import { createContext, useContext, useEffect, useState } from "react";
import baseUrl from "../services/baseUrl";

export const AuthContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useAuthContext = () => {
	return useContext(AuthContext);
};

export const AuthContextProvider = ({ children }) => {
	const [authUser, setAuthUser] = useState(null);
	const [loadingUser, setLoadingUser] = useState(true)
	useEffect(() => {
        // Get user ID from local storage
        const userId = JSON.parse(localStorage.getItem('userId'))
        console.log(userId);
        
        if (userId) {
            // Fetch user data from API
            fetchUserData(userId);
        }else{
			setLoadingUser(false)
		}
    }, []);

    const fetchUserData = async (userId) => {
        console.log('useriD');
		setLoadingUser(true);
        try {
            const response = await fetch(`${baseUrl}/api/auth/user/${userId}`);
            if (response.ok) {
                const userData = await response.json();
                setAuthUser(userData);
            } else {
                console.error("Failed to fetch user data");
            }
        } catch (error) {
            console.error("Error fetching user data:", error);
        }finally{
			setLoadingUser(false)
		}
    };

    // console.log(authUser);
	return <AuthContext.Provider value={{ authUser, setAuthUser,loadingUser }}>{children}</AuthContext.Provider>;
};