import axios, {AxiosRequestConfig} from 'axios';

const createAxiosShit = (config?: AxiosRequestConfig) => axios.create({
	baseURL: '/',
	headers: {
		'Content-Type': 'application/json',
	},
	withCredentials: true,
	...config,
});

export default createAxiosShit;
