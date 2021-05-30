import createAxiosShit from 'library/utils/fetch';
import {IOrderType} from './store/ordersStore';

export const getFindOrderItems = (type: IOrderType) => createAxiosShit().get(`/fleamarket?type=${type}`);

export const createOrderItem = () => {};
