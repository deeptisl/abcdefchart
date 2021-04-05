import axios from 'axios';
import { GET_ALL_RECORD_LIST, GET_CURRENCY_LIST } from '../actionType/index';

export function getAllRecord(currency) {
    return async dispatch => {
        return axios.get(`https://api.coindesk.com/v1/bpi/historical/close.json?currency=${currency}&start=2021-01-01&end=2021-03-01`)
            .then(response => response.data)
            .then(json => {
                dispatch({ type: GET_ALL_RECORD_LIST, payload: json });
            });
    };
}

export function getCurrencyRecord() {
    return async dispatch => {
        return axios.get("https://api.coindesk.com/v1/bpi/currentprice.json")
            .then(response => response.data)
            .then(json => {
                dispatch({ type: GET_CURRENCY_LIST, payload: json });
            });
    };
}

