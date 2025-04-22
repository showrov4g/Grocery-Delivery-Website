import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { dummyProducts } from "../assets/assets";
import toast from "react-hot-toast";

export const AppContext = createContext();


export const AppContextProvider = ({ children }) => {
    // currency data 
    const currency = import.meta.VITE_CURRENCY

    const navigate = useNavigate();
    // state variables 
    const [user, setUser] = useState(null);
    const [isSeller, setIsSeller] = useState(false);
    const [showUserLogin, setShowUserLogin] = useState(false);
    const [products, setProducts] = useState([]);
    const [cartItems, setCartItems] = useState({});
    const [searchQuery, setSearchQuery] = useState({});


    // product data fetch 
    const fetchProduct = async () => {
        setProducts(dummyProducts);
    }
    // add product to cart 
    const addToCart = (itemId) => {
        let cartData = structuredClone(cartItems);
        if (cartData[itemId]) {
            cartData[itemId] += 1;
        } else {
            cartData[itemId] = 1;
        }
        setCartItems(cartData);
        toast.success("Added to cart");
    }
    //update cart item quantity
    const updateCartItem = (itemId, quantity) => {
        let cartData = structuredClone(cartItems);
        cartData[itemId] = quantity;
        setCartItems(cartData);
        toast.success("Cart updated");
    }

    // remove cart item form cart 
    const removeFromCart = (itemId) => {
        let cartData = structuredClone(cartItems);
        if (cartData[itemId]) {
            cartData[itemId] -= 1;
            if (cartData[itemId] === 0) {
                delete cartData[itemId];
            }
        }
        toast.success("Remove From Cart");
        setCartItems(cartData);
    }

    //get card items count data
    const getCartCount = () => {
        let totalCount = 0;
        for (const item in cartItems) {
            totalCount += cartItems[item]
        }
        return totalCount;
    }


    // get cart total amount 
    const getCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            let itemInfo = products.find((product) => product._id === item);
            if (cartItems[item] > 0) {
                totalAmount += itemInfo.offerPrice * cartItems[item]
            }
        }
        return Math.floor(totalAmount * 100) / 100;
    }



    useEffect(() => {
        fetchProduct();
    }, [])



    const value = {
        navigate,
        user,
        setUser,
        isSeller,
        setIsSeller,
        showUserLogin,
        setShowUserLogin,
        products,
        currency,
        cartItems,
        addToCart,
        updateCartItem,
        removeFromCart,
        searchQuery,
        setSearchQuery,
        getCartCount,
        getCartAmount,
    }
    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}

export const useAppContext = () => {
    return useContext(AppContext);
}