import UserStore from 'pages/Authorization/store/userStore';
import OrderStore from 'pages/Orders/store/ordersStore';
import PetitionStore from 'pages/Petition/store/petitionStore';
import { io } from 'socket.io-client';

class RootStore {
	userStore: UserStore;

	orderStore: OrderStore;

	petitionStore: PetitionStore;

	socket = io(process.env.SERVER_API || '');

	constructor() {
		this.userStore = new UserStore();
		this.orderStore = new OrderStore();
		this.petitionStore = new PetitionStore();
	}
}

export default RootStore;
