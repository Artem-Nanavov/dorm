import {
	observable,
	action,
	makeAutoObservable,
	configure,
} from 'mobx';
import {getFindOrderItems} from '../api';

configure({
	useProxies: 'never',
});

export interface IOrderItem {
	title: string;
	text: string;
	image: string;
	id: string;
}

export type IOrderType = 'find' | 'change' | 'search';

class UserStore {
	@observable findItems: IOrderItem[] = [];

	@observable changeItems: IOrderItem[] = [];

	@observable searchItems: IOrderItem[] = [];

	@observable isLoading: boolean = true;

	constructor() {
		makeAutoObservable(this);
	}

	@action setItem(type: IOrderType, items: IOrderItem[]) {
		switch (type) {
		case 'change':
			this.changeItems = items;
			break;
		case 'find':
			this.findItems = items;
			break;
		case 'search':
			this.searchItems = items;
			break;
		default:
			break;
		}
	}

	@action async getItems(type: IOrderType) {
		try {
			const res = await getFindOrderItems(type);

			this.isLoading = false;
			this.setItem(type, res.data);
		} catch (e) {
			console.log('get user info error: ', e.message);
		}
	}

	@action getLocalItems(type: IOrderType) {
		switch (type) {
		case 'change':
			return this.changeItems;
		case 'find':
			return this.findItems;
		case 'search':
			return this.searchItems;
		default:
			return this.findItems;
		}
	}
}

export default UserStore;
