import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { StripeService } from './stripe.service';

import { Payment } from 'src/app/models/payment';
import { ClearPayment, CreatePaymentSheet } from './stripe.actions';

export class StripeStateModel {
  payment: Payment
}

const defaults = {
  payment: null
};

@State<StripeStateModel>({
  name: 'stripe',
  defaults
})
@Injectable()
export class StripeState {

  @Selector()
  static payment (state: StripeStateModel){
    return state.payment;
  }

  constructor(private stripeService: StripeService) {}


  @Action(CreatePaymentSheet)
  createPaymentSheet({ setState }: StateContext<StripeStateModel>,
     { payload }: CreatePaymentSheet) {
      return this.stripeService.createPaymentSheet(payload.paymentIntent).then((payment: Payment) => {
        setState({
          payment
        })
      })

    }

     @Action(ClearPayment)
  clearPayment({ setState }: StateContext<StripeStateModel>)
   {

        setState({
          payment: null
        })
      }

    }

