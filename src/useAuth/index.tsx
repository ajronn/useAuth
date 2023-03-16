import { createContext, useContext, useState, useEffect, useMemo } from "react";
import { login, LoginModel } from "../mocks";

const AuthContext = createContext<LoginModel>({ isAuthorized: false });

interface Props { children: React.ReactNode };
export const AuthProvider = ({ children }: Props) => {
    const [isAuthorized, setIsAuthorized] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            const data = await login();
            setIsAuthorized(data.isAuthorized)
        }

        fetchData();

    }, [])

    const getIsAuthorized = useMemo(() => isAuthorized, [isAuthorized]);

    return (
        <AuthContext.Provider value={{ isAuthorized: getIsAuthorized }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuthContext = () => {
    const ctx = useContext(AuthContext);
    if(!ctx) {
        throw Error;
    }
    return ctx;
};