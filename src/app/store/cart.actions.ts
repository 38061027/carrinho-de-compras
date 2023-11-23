import { createAction, props } from '@ngrx/store';
import { ICart } from '../interface/cart.interface';



export const addFood = createAction('[addFood Component] addFood ', props<{ cart: ICart }>());


