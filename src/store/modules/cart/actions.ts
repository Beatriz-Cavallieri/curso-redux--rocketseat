import { IProduct } from "./types";

//  Cada ação corresponde a uma função

export function addProductToCart(product: IProduct) {
    return {
        type: 'ADD_PRODUCT_TO_CART',
        payload: {
            product,
        }
    }
}