const initialState = {
    data: [],
    isLoading: true,
}

export default  (state = initialState, action) => {
    switch (action.type) {
        case "RECEIVE_DATA":
            return {
                ...state,
                data: action.payload,
                isLoading: false
            };
        default:
            return state;
    }
}

