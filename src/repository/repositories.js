const BASE_URL = "https://api.github.com";
const TOKEN = "";

const createError = message => ({ error: true, message });

export const searchUser = async user => {
    try {
        const response = await fetch(
            `${BASE_URL}/users/${user}?access_token=${TOKEN}`
        );
        return await response.json();
    } catch (e) {
        return createError(e.message);
    }
};

export const getRepositories = async user => {
    try {
        const response = await fetch(
            `${BASE_URL}/users/${user}/repos?access_token=${TOKEN}`
        );
        return await response.json();
    } catch (e) {
        return createError(e.message);
    }
};
