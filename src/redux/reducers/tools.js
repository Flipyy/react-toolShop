let initialState = {
    items: [],
    isLoaded: false
}


const tools = (state = initialState, action) => {
    switch (action.type) {
        case "SET_TOOLS":
            return{
                ...state,
                items: action.payload,
                isLoaded: true
            }
        case "SET_LOADED":
            return {
                ...state,
                isLoaded: action.payload
            }
        default:
            return state
    }
}

export default tools;