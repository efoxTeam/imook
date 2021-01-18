import {useReducer, Reducer} from 'react'

import {createContainer} from 'react-tracked'

const initialState = {
  count: 0,
  person: {
    age: 0,
    firstName: '',
    lastName: '',
  },
}
type State = {
  count: number
  person: {
    age: number
    firstName: string
    lastName: string
  }
}
type Action =
  | {type: 'INC'; count: number}
  | {type: 'SET_FIRSTNAME'; firstName: string}
  | {type: 'SET_LASTNAME'; lastName: string}
  | {type: 'SET_AGE'; age: number}
const reducer: Reducer<State, Action> = (state, action) => {
  switch (action.type) {
    case 'INC':
      return {
        ...state,
        count: state.count + action.count,
      }
    case 'SET_FIRSTNAME':
      return {
        ...state,
        person: {...state.person, ...{firstName: action.firstName}},
      }
    case 'SET_LASTNAME':
      return {
        ...state,
        person: {...state.person, ...{lastName: action.lastName}},
      }
    case 'SET_AGE':
      return {
        ...state,
        person: {...state.person, ...{age: action.age}},
      }
    default:
      return state
  }
}

const useValue = () => useReducer(reducer, initialState)

export const {Provider, useTrackedState, useUpdate: useDispatch} = createContainer(useValue)
