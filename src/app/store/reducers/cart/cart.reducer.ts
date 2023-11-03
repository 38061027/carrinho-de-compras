import { createReducer, on } from '@ngrx/store';
import { addFood, removeFood, reset } from '../../actions/cart/cart.actions';
import { ICart } from '../../interfaces/cart';

export interface ListaState {
  items: any[];
}

const initialState: ListaState = {
  items: [],
};

export const cartFoodReducer = createReducer(
  initialState,
  on(addFood, (state, { item }) => {
    return {
      ...state,
      items: [...state.items, item],
    };
  }),
  on(removeFood, (state, {id}) => {
    return {
      ...state,
      items: state.items.filter(item => item.id !== id),
    };
  }),
  on(reset, (state) => {
    return {...state, items:[]}
  })
);
