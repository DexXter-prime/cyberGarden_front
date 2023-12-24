import React from 'react';
import AuthProvider from "./AuthProvider";
import {CombineComponents} from "../utils/CombineComponents";

const providers = [
    AuthProvider
]

const AppContextProvider = CombineComponents(...providers)

export default AppContextProvider;