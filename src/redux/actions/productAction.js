import { ActionTypes } from "../contents/action_types";
export const setProduct = (products) => {
    return {
        type: ActionTypes.SET_PRODUCTS,
        payload: products,
    };
};


export const selectedProduct = (product) => {
    return {
        type: ActionTypes.SELECTED_TPRODUCTS,
        payload: product,
    };
};