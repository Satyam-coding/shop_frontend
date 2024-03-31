export const CartReducer = (state, action) => {
    switch (action.type) {
        case "GET_QUANTITY":
            return {
                ...state,
                quantity: action.payload.quantity
            }

        case "AddToCart":
            let { id, title, image, price, description, quantity } = action.payload;
            let existingProduct=state.cart.findIndex((curr)=>curr.id==id);
            if(existingProduct!=-1){
                state.cart[existingProduct].quantity+=quantity;
                return{
                    ...state,
                    cart:[...state.cart]
                }
            }
        
            const new_product = {
                id,
                title,
                image,
                price,
                description,
                quantity
            }

            return {
                ...state,
                cart: [...state.cart, new_product],
            }

        case "Update_Cart":
            const cart = action.payload;
            let updated_items = cart.reduce((acc, curr) => {
                return acc + curr.quantity;
            }, 0)

            let updated_price = cart.reduce((acc, curr) => {
                return acc + curr.price * curr.quantity;
            }, 0)
            return {
                ...state,
                total_items: updated_items,
                total_price: (updated_price).toFixed(2),
            }

        case "Remove_Item":
            let updated_cart = state.cart.filter((curr) => curr.id !== action.payload);
            return (
                {
                    ...state,
                    cart: updated_cart
                }
            )
    }
    return state;
}