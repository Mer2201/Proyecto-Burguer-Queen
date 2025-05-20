import { Order } from "src/app/models/order";

export class CreateOrder {
  static readonly type = '[Orders] Add order';
  constructor(public payload: {order: Order}) { }
}
