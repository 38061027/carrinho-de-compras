import { createReducer, on } from '@ngrx/store';



import { addFood } from './cart.actions';
import { ICart } from '../interface/cart.interface';


const initialState: ICart = {
  name: [],
  valor: 0,
  quantity: 0

};
export const cartFoodReducer = createReducer(
  initialState,
  on(addFood, (state, { cart }) => {
    return {
      ...state,
      name: [...state.name , cart.name],
      valor: state.valor + cart.valor,
      quantity: state.quantity + 1
    };
  })

);


