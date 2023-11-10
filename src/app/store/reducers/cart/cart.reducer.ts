import { createReducer, on } from '@ngrx/store';
import {  addFood, removeFood, reset } from '../../actions/cart/cart.actions';
import { ICart } from '../../interfaces/cart';


export interface ListaState {
  // items: ICart[];
  comida: string[];
  valor: number;

}

const initialState: ListaState = {
  comida: [],
  valor: 0

};


export const cartFoodReducer = createReducer(
  initialState,
  on(addFood, (state, { item }) => {
    return {
      ...state,
      comidas: [...state.comida, item],
    };
  })

  // on(removeFood, (state, {id}) => {
  //   return {
  //     ...state,
  //     items: state.items.filter(item => item.id !== id),
  //   };
  // }),
  // on(reset, (state) => {
  //   return {...state, items:[]}
  // })
);
