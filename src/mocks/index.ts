export interface LoginModel {
    isAuthorized: boolean
}

export const login = (success = true, timeout = 3000): Promise<LoginModel> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (success) {
                resolve({ isAuthorized: true });
            } else {
                reject({ message: 'Fatal error' });
            }
        }, timeout);
    });
}