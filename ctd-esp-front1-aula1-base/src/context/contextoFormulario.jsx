import { createContext, useReducer } from "react";

export const FormContext = createContext({});

const initialState = {
  trainer: {},
  pokemon: {}
}

const reducer = (state, action) => {
  switch(action.type){
    case "UPDATE_TRAINER": 
      return {
        ...state,
        trainer: {
          ...state.trainer,
          ...action.payload
        }
      }
      case "UPDATE_POKEMON":
        return {
          ...state,
          pokemon: {
            ...state.pokemon,
            ...action.payload
          }
        }
    default:
      return state;
  }
}

export function FormProvider({ children }) {

  const [state, dispatch] = useReducer(reducer, initialState)

  return (
  <FormContext.Provider value={{state, dispatch}}>
    {children}
  </FormContext.Provider>
  );
}
