import UserStore from 'pages/Authorization/store/userStore';

class RootStore {
	userStore: UserStore;

	constructor() {
		this.userStore = new UserStore();
	}
}

export default RootStore;
