import { useAuthContext } from "../useAuth";

type Props = { children: React.ReactNode };

export const OnlyAuthorized = ({ children }: Props) => {
    const { isAuthorized } = useAuthContext();
    return <>{isAuthorized ? children : null}</>;
}

export const OnlyUnauthorized = ({ children }: Props) => {
    const { isAuthorized } = useAuthContext();
    return <>{!isAuthorized ? children : null}</>;
}