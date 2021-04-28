import axios from "axios";


export const toolsAPI ={
    getTools: (sortBy, category) =>{
        return axios.get(`http://localhost:3001/tools?${category !== null ? `category=${category}` : ""}&_sort=${sortBy.type}&_order=${sortBy.order}`)
    }
}