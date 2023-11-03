import { createAction, props } from '@ngrx/store';
import { ICart } from '../../interfaces/cart';

export const addFood = createAction('[addFood Component] addFood ', props<{ item: ICart }>());
export const removeFood = createAction('[removeFood Component] removeFood', props<{ id: number }>());
export const reset = createAction('[reset Component] reset');

