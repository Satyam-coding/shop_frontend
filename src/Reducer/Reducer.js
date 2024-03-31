export const reducer = (state, action) => {

    switch (action.type) {
        case "api_fetched":
            return {
                ...state,
                loading: false,
                api_data: action.payload.api,
            }

        case "search_query":
            return {
                ...state,
                search_category: action.payload.query
            }

            case "send_current_user":
                return {
                    ...state,
                    currentUser:action.payload.data
                }

    }
    return state;
}