export const setCategory = (categoryIndex) => ({type: "SET_CATEGORY", payload: categoryIndex})

export const setSortBy = ({type, order}) => ({type: "SET_SORT_BY", payload: {type, order}})