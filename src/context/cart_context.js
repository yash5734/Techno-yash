import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/cartReducer";

const CartContext = createContext();

const getLocalCartData = () => {
    let LocalCartData = localStorage.getItem("yash");
    if (!LocalCartData) {
        return [];
    } else {
        return JSON.parse(LocalCartData);
    }
};


const initialState = {
    cart: getLocalCartData(),
    total_item: "",
    total_price: "",
    shipping_fee: 50000,
};

const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const addToCart = (id, color, amount, product) => {
        dispatch({ type: "ADD_TO_CART", payload: { id, color, amount, product } });
    };

    const setDecrease = (id) => {
        dispatch({ type: "SET_DECREMENT", payload: id });
      };
    
      const setIncrement = (id) => {
        dispatch({ type: "SET_INCREMENT", payload: id });
      };

    const removeItem = (id) => {
        dispatch({ type: "REMOVE_ITEM", payload: id });
    };
    const clearCart = () => {
        dispatch({ type: "CLEAR_CART" });
    };

    useEffect(() => {
        dispatch({ type: "CART_TOTAL_ITEM" });
        dispatch({ type: "CART_TOTAL_PRICE" });
        localStorage.setItem("yash", JSON.stringify(state.cart));
    }, [state.cart]);

    return (
        <CartContext.Provider value={{ ...state, addToCart, setIncrement,setDecrease,removeItem,clearCart }}>
            {children}
        </CartContext.Provider>
    );
};

const useCartContext = () => {
    return useContext(CartContext);
};

export { CartProvider, useCartContext };