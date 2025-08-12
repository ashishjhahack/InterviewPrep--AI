import {toast} from 'react-hot-toast'
import React, { createContext, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const navigate = useNavigate(); 

    const [token, setToken] = useState('');

    const value = {
        navigate, backendUrl,
        token, setToken
    };

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    );
}

export default ShopContextProvider;