import UserStore from 'pages/Authorization/store/userStore';
import OrderStore from 'pages/Orders/store/ordersStore';

class RootStore {
	userStore: UserStore;

	orderStore: OrderStore;

	constructor() {
		this.userStore = new UserStore();
		this.orderStore = new OrderStore();
	}
}

export default RootStore;
