import { createAction, createReducer, on, props } from "@ngrx/store"

export interface IAppState{
  pay:number
  food:string
  quantidade:number
  counter:number
}

export const appInitialState:IAppState = {
  pay : 25,
  food : 'X-salada',
  quantidade : 2,
  counter : 4

}


export const incrementador = createAction('[app] Aumenta contador')
export const comida = createAction('[app] Adicionar Comida', props<{ food: string }>());

export const appReducer = createReducer(
    appInitialState,
    on(incrementador, (state)=>{
      state = {
        ...state,
        counter:state.counter+1
      }
      return state
    }),
    on(comida, (state, { food }) => {
      return {
          ...state,
          food: food 
      };
  })
)