import uuid from 'uuid';
import { GET_POEMS, ADD_POEM, DELETE_POEM , POEMS_LOADING} from '../actions/types'

const initialState = {
  poems: [],
  loading: false
}

export default function(state = initialState, action){
  switch(action.type){
    case GET_POEMS:
      return {
        ...state,
        poems: action.payload,
        loading: false,
      }
    case DELETE_POEM:
      return {
        ...state,
        poems:state.poems.filter(poem => poem._id !== action.payload)
      }
    case ADD_POEM:
    return {
      ...state,
      poems: [action.payload, ...state.poems]
    };
    case POEMS_LOADING:
      return {
        ...state,
        loading:true
      }
      default:

        return state;
  }

}