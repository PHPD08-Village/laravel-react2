// Personal_editor/AppProvider.jsx
import React, { createContext } from 'react';
import axios from 'axios';

export const AppContext = createContext();

const AppProvider = ({ children }) => {


    return (
        <AppContext.Provider>
            {children}
        </AppContext.Provider>
    );
};

export default AppProvider;
