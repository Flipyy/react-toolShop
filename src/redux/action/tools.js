import axios from "axios";

export const setTools = (items) => ({type: "SET_TOOLS", payload:items})

export const setLoaded = (payload) => ({type: "SET_LOADED", payload})

export const fetchTools = (sortBy, category) => (dispatch) => {
    dispatch(setLoaded(false))
    axios.get(
        `/tools?${category !== null? `category=${category}`: ""}&_sort=${sortBy.type}&_order=${sortBy.order}`,
        ).then(({data}) => {
            dispatch(setTools(data))
    })
}