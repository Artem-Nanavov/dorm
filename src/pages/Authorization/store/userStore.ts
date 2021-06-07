import {
	observable,
	action,
	makeAutoObservable,
	configure,
} from 'mobx';
import createAxiosShit from 'library/utils/fetch';

configure({
	useProxies: 'never',
});

interface IUser {
	image: string;
	id: string;
	email: string;
	first_name: string;
	last_name: string;
	dormId: string;
	room_number: string;
	invitationId: string;
}

class UserStore {
	@observable user: null | IUser = null;

	@observable isAuth: boolean = false;

	@observable isLoading: boolean = false;

	@observable isLoadingAuth: boolean = true;

	@observable isLogout = false;	

	@observable phrase: any = '';

	constructor() {
		makeAutoObservable(this);
	}

	@action setUserData(user: IUser) {
		this.user = user;

		this.setIsAuth(true);
	}

	@action setIsAuth(isAuth: boolean) {
		this.isAuth = isAuth;
		this.isLoadingAuth = false;
	}

	@action setIsLoading(isLoading: boolean) {
		this.isLoading = isLoading;
	}

	@action async getUserInfo() {
		try {
			const res = await createAxiosShit().get('/auth/me');
			this.setUserData(res.data);
		} catch (e) {
			console.log('get user info error: ', e.message);
		} finally {
			this.isLoadingAuth = false;
		}
	}

	@action async login(email: string, password: string) {
		try {
			const res = await createAxiosShit().post('/auth/login', {email, password});
			this.setUserData(res.data);
			this.isAuth = true;
			console.log('data', res.data);
		} catch (e) {
			console.log('login user error: ', e.message);
		} finally {
			this.isLoading = false;
		}
	}

	@action async reg(
		invitationId: string,
		firstName: string,
		lastName: string,
		password: string,
		dormId: string,
		roomNumber: string,
	) {
		try {
			const res = await createAxiosShit().post('/auth/reg', {
				password,
				invitationId,
				firstName,
				lastName,
				dormId,
				roomNumber,
			});
			this.setUserData(res.data);
			this.isAuth = true;
			console.log('data', res.data);
		} catch (e) {
			console.log('reg user error: ', e.message);
		} finally {
			this.isLoading = false;
		}
	}

	@action async logout() {
		try {
			this.isLoading = true;

			await createAxiosShit().post('/auth/logout');
			this.isLogout = true;
		} catch (e) {
			console.log('logou user error: ', e.message);
		} finally {
			this.isLoading = false;
		}
	}

	@action async getPhrase() {
		try {
			this.isLoading = true;

			const res = await createAxiosShit().get('/phrase');

			this.phrase = res.data;
		} catch (e) {
			console.log('logou user error: ', e.message);
		} finally {
			this.isLoading = false;
		}
	}

	@action async updateUserInfo(fields: {[key: string]: any}[]) {
		try {
			this.isLoading = true;

			const data = new FormData();

			fields.forEach((field) => {
				data.append(field.key, field.value);

				if (field.key === 'image') {
					console.log(field);
					data.append('image', field.value[0], field.value[0].name);
				}
			});

			const res = await createAxiosShit().put('/user/edit', data);

			this.phrase = res.data;
			console.log('res', res.data);
		} catch (e) {
			console.log('logou user error: ', e.message);
		} finally {
			this.isLoading = false;
		}
	}
}

export default UserStore;
