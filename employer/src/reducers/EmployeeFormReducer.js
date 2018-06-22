import { EMPLOYEE_UPDATE, EMPLOYEE_CREATE } from '../actions/types';

const initialState = {
    name: '',
    phone: '',
    shift: ''
}

export default (state = initialState, action) => {
  switch (action.type) {

  case EMPLOYEE_UPDATE:
    const { prop, value } = action.payload;
    return { ...state, [prop]: value };

  case EMPLOYEE_CREATE:
    return initialState;

  default:
    return state
  }
};
