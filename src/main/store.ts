import UserStore from 'pages/Authorization/store/userStore';
import OrderStore from 'pages/Orders/store/ordersStore';
import { io } from 'socket.io-client';

class RootStore {
	userStore: UserStore;

	orderStore: OrderStore;

	socket = io(process.env.SERVER_API || '');

	constructor() {
		this.userStore = new UserStore();
		this.orderStore = new OrderStore();
	}
}

export default RootStore;
