import axios from "axios";

export const requestData = url => async dispatch => {
    axios.get(url)
        .then(res => {
            dispatch({
                type: "RECEIVE_DATA",
                payload: res.data,
            });
        })
        .catch(error => {
            console.error(error)
            dispatch({
                type: "RECEIVE_DATA",
                payload: [],
            });
        });
};