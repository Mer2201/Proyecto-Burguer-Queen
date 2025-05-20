import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { Product } from 'src/app/models/product';
import { ProductService } from './product.service';
import { GetProductById, GetProductsByCategory } from './products.actions';

export class ProductsStateModel {
  products: Product[];
  product: Product;
}

const defaults = {
  products: [],
  product: null
};

@State<ProductsStateModel>({
  name: 'products',
  defaults
})
@Injectable()
export class ProductsState {

  @Selector()
  static products(state: ProductsStateModel){
    return state.products;
  }

    @Selector()
  static product(state: ProductsStateModel){
    return state.product;
  }

  constructor(private productService: ProductService){ }


  @Action(GetProductsByCategory)
  getProductsByCategory({ getState, setState }:
  StateContext<ProductsStateModel>, { payload }:
  GetProductsByCategory) {
    return this.productService.GetProductsByCategory
    (payload.idCategory).then( (products: Product[]) => {
      const state = getState();
      setState({
        ...state,
        products
      })
    })
  }

    @Action(GetProductById)
  getProductById({ getState, setState }:
  StateContext<ProductsStateModel>, { payload }:
  GetProductById) {
    return this.productService.GetProductById(payload.id).then((product: Product) => {
      const state = getState();
      setState({
        ...state,
        product
      })
    })
  }
}
