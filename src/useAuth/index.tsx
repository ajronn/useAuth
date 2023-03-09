import { createContext, useContext, useState, useEffect } from "react";
import { login } from "../mocks";

const AuthContext = createContext({ isAuthorized: false });

type Props = { children: React.ReactElement };
export const AuthProvider = ({ children }: Props) => {
    const [isAuthorized, setIsAuthorized] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            await login().then((data) => setIsAuthorized(data.isAuthorized));
        }

        fetchData();

    }, [])

    return (
        <AuthContext.Provider value={{ isAuthorized }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext);