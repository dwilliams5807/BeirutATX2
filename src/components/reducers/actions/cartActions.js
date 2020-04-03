export const SET_LOCATION = 'SET_LOCATION';
export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const SUB_QUANTITY = 'SUB_QUANTITY';
export const ADD_QUANTITY = 'ADD_QUANTITY';
export const ADD_SHIPPING = 'ADD_SHIPPING';
export const CART_VISIBLE = 'CART_VISIBLE';


export const setLocation= (location)=>{
    return{
        type: SET_LOCATION,
        location
    }
}
export const cartVisible= (visible)=>{
    return{
        type: CART_VISIBLE,
        visible
    }
}

export const addToCart= (id)=>{
    return{
        type: ADD_TO_CART,
        id
    }
}

export const removeItem=(id)=>{
    return{
        type: REMOVE_ITEM,
        id
    }
}

export const subtractQuantity=(id)=>{
    return{
        type: SUB_QUANTITY,
        id
    }
}

export const addQuantity=(id)=>{
    return{
        type: ADD_QUANTITY,
        id
    }
}