
//actions
export const SET_CART = 'set_cart'
export const SET_COUNT = 'set_count'
export const SET_TOTAL_PRICE = 'set_total_price'
export const SET_INCREASE = 'set_increase'
export const SET_ISSIGNEDIN  = 'set_isSignedIn'
export const SET_USER = 'set_User'
export const SET_SHOWDIALOG = 'set_Dialog'
export const SET_URL = 'set_URL'


export const SetCart = payload =>{
    return {
        type: SET_CART,
        payload
    }
}


export const SetCount = payload =>{
    return {
        type: SET_CART,
        payload
    }
}

export const SetIncrease = payload =>{
    return {
        type: SET_INCREASE,
        payload
    }
}


export const SetIsSignedIn = payload =>{
  
    return {
        type: SET_ISSIGNEDIN,
        payload
    }
}


export const SetUser = payload =>{
    return {
        type: SET_USER,
        payload
    }
}

export const SetDialogShow = payload =>{
    return {
        type: SET_SHOWDIALOG,
        payload
    }
}


export const SetURL = payload =>{
    return {
        type: SET_URL,
        payload
    }
}