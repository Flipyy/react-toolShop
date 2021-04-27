const _ = require("lodash")

let initialState = {
    items: {},
    totalPrice: 0,
    totalCount: 0
}


const getTotalPrice = (arr) => arr.reduce((sum, obj) => obj.price + sum, 0)

const getTotalSum = (obj, path) => {
    return Object.values(obj).reduce((sum, obj) => {
        const value = _.get(obj, path)
        return sum + value
    }, 0)
}

const cart = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TOOL_CART": {
            const currentToolItems = !state.items[action.payload.id] ?
                [action.payload] :
                [...state.items[action.payload.id].items, action.payload]

            const newItems = {
                ...state.items,
                [action.payload.id]: {
                    items: currentToolItems,
                    totalPrice: getTotalPrice(currentToolItems)
                }
            }

            const totalPrice = getTotalSum(newItems, 'totalPrice');
            const totalCount = getTotalSum(newItems, 'items.length');

            return {
                ...state,
                items: newItems,
                totalPrice,
                totalCount
            }
        }
        case "REMOVE_CART_ITEM": {
            const newItems = {
                ...state.items
            }

            const currentTotalCount = newItems[action.payload].totalPrice
            const currentTotalPrice = newItems[action.payload].items.length

            delete newItems[action.payload]

            return {
                ...state,
                items: newItems,
                totalPrice: state.totalPrice - currentTotalPrice,
                totalCount: state.totalCount - currentTotalCount
            }
        }
        case "PLUS_CART_ITEM": {
            const newObjItems = [...state.items[action.payload].items, state.items[action.payload].items[0]]
            const newItems = {
                ...state.items,
                [action.payload]: {
                    items: newObjItems,
                    totalPrice: getTotalPrice(newObjItems)
                }
            }

            const totalPrice = getTotalSum(newItems, 'totalPrice');
            const totalCount = getTotalSum(newItems, 'items.length');

            return {
                ...state,
                items: newItems,
                totalPrice,
                totalCount
            }
        }
        case "MINUS_CART_ITEM": {
            const oldItems = state.items[action.payload].items

            const newObjItems = oldItems.length > 1 ? state.items[action.payload].items.slice(1): oldItems

            const newItems = {
                items: newObjItems,
                totalPrice: getTotalPrice(newObjItems)
            }

            const totalPrice = getTotalSum(newItems, 'totalPrice');
            const totalCount = getTotalSum(newItems, 'items.length');

            return {
                ...state,
                items: newItems,
                totalPrice,
                totalCount
            }
        }
        case "CLEAR_CART": {
            return {
                items: {},
                totalCount: 0,
                totalPrice: 0
            }
        }
        default:
            return state
    }
}

export default cart