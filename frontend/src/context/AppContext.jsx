import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { dummyProducts } from "../assets/assets";

export const AppContext = createContext();


export const AppContextProvider = ({ children }) => {
    const navigate = useNavigate();
    // state variables 
    const [user, setUser] = useState(null);
    const [isSeller, setIsSeller] = useState(false);
    const [showUserLogin, setShowUserLogin] = useState(false);
    const [products,setProducts] = useState([]);

    // product data fetch 
    const fetchProduct = async()=>{
        setProducts(dummyProducts);
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
        setShowUserLogin
    }
    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}

export const useAppContext = () => {
    return useContext(AppContext);
}