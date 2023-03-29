
interface IStatusObject {
  PAID: 'paid';
  SENT: 'sent';
  DELIVERED: 'delivered';
}

const statusObject: IStatusObject = {
  PAID: 'paid',
  SENT: 'sent',
  DELIVERED: 'delivered',
};

const formatTime = (date) => {

	function addZero(n) {
			return n < 10 ? "0"+n : n
	}
	var result = date.getFullYear() +"-"+addZero(date.getMonth()+1)+"-"+ addZero(date.getDate())

	return result
}

export default class Order {
	private readonly id: string


	private _total: number;

	private _subTotal: number;

  private _status: 'paid' | 'sent' | 'delivered';

	private _createdAt: string;

	private _userId: string;

	private _quantity: number;

	private _products: Array<any>;

	private constructor(total: number, subTotal: number, userId: string, quantity: number, products: Array<any>) {
		this._total = total;
		this._subTotal = subTotal;
		this._userId = userId;
		this._quantity = quantity;
    this._products = products;
    this._status = statusObject.PAID;
		this._createdAt = formatTime(new Date())
  }

	static create(total: number, subTotal: number,userId: string, quantity: number, products: Array<any>): Order {
    return new Order(total, subTotal, userId, quantity, products);
  }

  get total() {
    return this._total
  }

  get subTotal() {
    return this._subTotal
  }

  get quantity() {
    return this._quantity
  }

  get createAt() {
    return this._createdAt
  }

  get products(): Array<any> {
    return this._products;
  }

  get userId(): string {
    return this._userId;
  }

  get status(): 'paid' | 'sent' | 'delivered' {
    return this._status;
  }
}
