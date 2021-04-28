import {toolsAPI} from "../../api/api";

export const setTools = (items) => ({type: "SET_TOOLS", payload:items})

export const setLoaded = (payload) => ({type: "SET_LOADED", payload})

export const fetchTools = (sortBy, category) => async (dispatch) => {
    dispatch(setLoaded(false))
    let response = await toolsAPI.getTools(sortBy, category)
    dispatch(setTools(response.data))
}