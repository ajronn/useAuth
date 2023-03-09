import { useAuth } from "../useAuth";

type Props = { children: React.ReactElement | React.ReactElement[] };

export const OnlyAuthorized = ({ children }: Props) => {
    const { isAuthorized } = useAuth();
    return isAuthorized ? <>{children}</> : <></>
}

export const OnlyUnauthorized = ({ children }: Props) => {
    const { isAuthorized } = useAuth();
    return !isAuthorized ? <>{children}</> : <></>
}