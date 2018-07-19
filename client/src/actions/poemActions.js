import axios from 'axios';
import { GET_POEMS, ADD_POEM, DELETE_POEM, POEMS_LOADING} from './types';

export const getPoems = () => dispatch => {
  dispatch(setPoemsLoading());
  axios
    .get('api/poems')
    .then(res => 
      dispatch({
        type: GET_POEMS,
        payload: res.data
      })).catch(function (error) {
      console.log(error.response);
 });

}
export const addPoem = (poem) => dispatch => {
  axios
    .post('/api/poems', poem)
    .then( res => 
      dispatch({
        type: ADD_POEM,
        payload: res.data
      }
    ))
}

export const deletePoem = (id) => dispatch => {
  axios.delete(`/api/poems/${id}`).then(res => dispatch({
    type:DELETE_POEM,
    payload: id
  }))
}


export const setPoemsLoading = () => {
  return {
    type: POEMS_LOADING
  }
}