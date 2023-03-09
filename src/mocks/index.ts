export type LoginModel = {
    isAuthorized: boolean
}

export const login = (success = true, timeout = 3000) => {
    return new Promise((resolve: (value: LoginModel) => void, reject) => {
        setTimeout(() => {
            if (success) {
                resolve({ isAuthorized: true });
            } else {
                reject({ message: 'Fatal error' });
            }
        }, timeout);
    });
}