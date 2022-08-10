import { useContext } from "react";
import { createContext, useReducer } from "react";
import propTypes from "prop-types"

const FormContext = createContext({});


export function useFormContext() {
  const formData = useContext(FormContext)

  if(!formData) {
    throw new Error("O componente precisar estar no contexto")
  }

  return formData;
}

const initialState = {
  trainer: {
    name: '',
    lastName: '',
    email: '',
  },
  pokemon: {
    name: '',
    type: '',
    element: '',
    height: 0,
    age: ''
  }
}

/**
 * Reducer para atualizar o state do componente de acordo com o tipo da ação
 * que vai ser acionada
 * 
 * @param {object} state  - Objeto que armazena o estado do contexto
 * @param {object} state.coach - Objeto que contém os dados do treinador
 * @param {string} state.coach.name - Nome do treinador
 * @param {string} state.coach.lastName - Sobrenome do treinador
 * @param {string} state.coach.email - Email do treinador
 * @param {object} state.pokemon - Objeto que contém os dados do pokemon
 * @param {string} state.pokemon.name - Nome do pokemon
 * @param {string} state.pokemon.type - Tipo do pokemon
 * @param {string} state.pokemon.element - Elemento do pokemon
 * @param {number} state.pokemon.height - Altura do pokemon
 * @param {string} state.pokemon.age - Idade do pokemon
 * 
 * @param {object}  action - Objeto que armazena o tipo da ação e os dados se tiver
 * @param {string}  action.type - Nome da ação que irá ser acionada
 * @param {object}  action.payload - Objeto que armazena os dados da ação
 * @param {string}  action.payload.field - Nome do campo a ser atualizado
 * @param {string | number}  action.payload.value - Valor do campo
 * 
 * @return {void} - Não tem retorno
 */
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

FormProvider.propTypes = {
  children: propTypes.arrayOf(propTypes.element)
}