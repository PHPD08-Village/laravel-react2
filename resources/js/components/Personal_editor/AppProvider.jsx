// Personal_editor/AppProvider.jsx
import React, { createContext, useState, useEffect, useCallback } from 'react';
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
