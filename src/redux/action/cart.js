export const addToolToCart = (toolObj) => ({type: "ADD_TOOL_CART", payload: toolObj})

export const clearCart = () => ({type: "CLEAR_CART"})

export const removeCartItem = (id) => ({type: "REMOVE_CART_ITEM", payload: id})

export const plusCartItem = (id) => ({type: "PLUS_CART_ITEM", payload: id})

export const minusCartItem = (id) => ({type: "MINUS_CART_ITEM", payload: id})

