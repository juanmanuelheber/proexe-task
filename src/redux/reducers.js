import { types } from "./types";

const initialState = {
  dataFetched:false,
  users:[],
  currentUserId:null,
};

export const stateReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.DATA_FETCHED:
      return{
        ...state,
        dataFetched: action.payload.dataFetched
      }
    case types.SET_USERS:
      return {
        ...state,
        users: action.payload.users
      }
    case types.CURRENT_USER:
      return{
        ...state,
        currentUserId: action.payload.currentUserId
      }

    default:
      return state;
  }
};
