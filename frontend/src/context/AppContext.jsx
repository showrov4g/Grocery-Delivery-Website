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
    const [products,setProducts] = useState([]);
    const [cartItems,setCartItems] = useState({})


    // product data fetch 
    const fetchProduct = async()=>{
        setProducts(dummyProducts);
    }
    // add product to cart 
    const addToCart =()=>{
        let cartData = structuredClone(cartItems);
        if(cartData[itemId]){
            cartData[itemId] += 1;
        }else{
            cartData[itemId] = 1;
        }
        setCartItems(cartData);
        toast.success("Added to cart");
    }

    useEffect(()=>{
        fetchProduct();
    },[])



    const value = {
        navigate,
        user,
        setUser,
        isSeller,
        setIsSeller,
        showUserLogin,
        setShowUserLogin,
        products,
        currency
    }
    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}

export const useAppContext = () => {
    return useContext(AppContext);
}