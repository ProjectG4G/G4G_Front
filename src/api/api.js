
import axios from "axios";

const baseURL = 'http://34.159.231.164/api/';


export const API = axios.create({
	baseURL,
	headers: {
		'Content-Type': 'application/json',
	}
});

export const PublicApi = axios.create({
	baseURL,
	headers: {
		'Content-Type': 'application/json',
	}
});

const refreshToken = async () => {
    // Make an API call to refresh the token
    const response = await API.post('auth/refresh', {
        refreshToken: localStorage.getItem('refresh')
    });

    // Update the token and refreshToken in local storage
    localStorage.setItem('token', response.data.token);
    localStorage.setItem('refresh', response.data.refresh);

    // Update the authorization header for subsequent requests
    API.defaults.headers.common['Authorization'] = 'Bearer ' + response.data.token;

    // Return the refreshed token
    return response.data.token;
};

API.interceptors.request.use(
    req => {
        req.headers['Authorization'] = 'Bearer ' + localStorage.getItem('token');
        return req;
    }
);

API.interceptors.request.use(
    async req => {
        req.headers['Authorization'] = 'Bearer ' + localStorage.getItem('token');
        return req;
    },
    async error => {
        if (error.response && error.response.status === 403) {
            try {
                const token = await refreshToken();
                error.config.headers['Authorization'] = 'Bearer ' + token;
                return axios.request(error.config);
            } catch (refreshError) {
   
                throw refreshError;
            }
        }
        return Promise.reject(error);
    }
);