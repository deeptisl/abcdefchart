import {
    GET_ALL_RECORD_LIST,
    GET_CURRENCY_LIST
  } from "../actionType/index";
  
  const InitialState = {
    getAllRecordList: [],
    getCurrencyList:[],
  };
  
  const RecordReducers = (state = InitialState, action) => {
    switch (action.type) {
      case GET_ALL_RECORD_LIST:
        return {
          ...state,
          getAllRecordList: action.payload
        };
      case GET_CURRENCY_LIST:
        return {
          ...state,
          getCurrencyList: action.payload
        };
      default:
        return state;
    }
  };
  
  export default RecordReducers;
  