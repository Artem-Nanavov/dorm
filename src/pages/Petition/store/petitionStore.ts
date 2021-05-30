import {
	observable,
	action,
	makeAutoObservable,
	configure,
} from 'mobx';
import {createPetitionApi, getPetitionApi} from '../api';

configure({
	useProxies: 'never',
});

export interface IPetition {
	dislikes: number;
	id: string;
	likes: number;
	text: string;
	title: string;
}

class UserStore {
	@observable isLoading: boolean = false;

	@observable isRequestDone: boolean = false;

	@observable isGetRequestDone: boolean = false;

	@observable message: string = '';

	@observable type: 'error' | 'success' = 'success';

	@observable petitions: IPetition[] = [];

	constructor() {
		makeAutoObservable(this);
	}

	@action async createPet(title: string, text: string) {
		try {
			await createPetitionApi(title, text);
			this.setNot('success');
		} catch (e) {
			this.setNot('error');
			console.log('get user info error: ', e.message);
		} finally {
			this.isLoading = false;
			this.isRequestDone = true;
		}
	}

	@action async getAllPetitions() {
		try {
			this.isLoading = true;
			const res = await getPetitionApi();
			this.petitions = res.data;
		} catch (e) {
			this.setNot('error');
			console.log('get user info error: ', e.message);
		} finally {
			this.isLoading = false;
		}
	}

	@action setNot(type: 'error' | 'success') {
		if (type === 'success') {
			this.message = 'Вы успешно подали петицию';
			this.type = 'success';
		} else {
			this.type = 'error';
			this.message = 'Произошла ошибка';
		}
	}

	@action disableReq() {
		this.isRequestDone = false;
	}
}

export default UserStore;
