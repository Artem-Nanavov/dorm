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
	userId: string;
	email: string;
	firstName: string;
	lastName: string;
	dormId: string;
	room_number: string;
}

class UserStore {
	@observable userId: null | string = null;

	@observable email: null | string = null;

	@observable firstName: null | string = null;

	@observable lastName: null | string = null;

	@observable dormId: null | string = null;

	@observable room_number: null | string = null;

	@observable isAuth: boolean = false;

	@observable isLoading: boolean = false;

	@observable isLoadingAuth: boolean = true;

	constructor() {
		makeAutoObservable(this);
	}

	@action setUserData(user: IUser) {
		this.userId = user.userId;
		this.email = user.email;
		this.firstName = user.firstName;
		this.lastName = user.lastName;
		this.dormId = user.dormId;
		this.room_number = user.room_number;

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
		}
	}

	@action async login(email: string, password: string) {
		try {
			const res = await createAxiosShit().post('/auth/login', {email, password});
			this.setUserData(res.data);
			console.log('data', res.data);
		} catch (e) {
			console.log('login user error: ', e.message);
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
			console.log('data', res.data);
		} catch (e) {
			console.log('reg user error: ', e.message);
		}
	}
}

export default UserStore;
