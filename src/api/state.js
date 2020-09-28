import React, { createContext, useReducer, useState } from 'react';
import { CommentAction } from 'semantic-ui-react';



export const StateContext = createContext();


export const StateProvider = ({ children }) => {
    const [data, setData] = useState(
        [
            { id: 1, tabNum: '00049466', first_name: 'Erasyl', last_name: 'Kakish', email: 'yerassyl.k@gmail.com' },
            { id: 2, tabNum: '00049465', first_name: 'Erbol', last_name: 'Satybaldin', email: 'erbolski@gmail.com' },
            { id: 3, tabNum: '00049464', first_name: 'Askhat', last_name: 'Semeikhanov', email: 'ask@gmail.com' },
        ]
    );

    const deleteUser = (id) => {
        setData(data.filter(item => item.id !== id));
    }

    const addUser = (id, tabNum, firstname, lastname, email) => {
        setData(data => [...data, {
            id,
            tabNum,
            first_name : firstname, 
            last_name : lastname, 
            email
        }]);
    }

    const handleChange = ({ target }) => {
        const { name, value } = target;
        setData({ ...data, [name]: value });
    }

    const initialState = { id: null, tabNum: null, first_name: null, last_name: null, email: null }

    const onOpen = () => {
        return initialState;
    }

    const onUpdate = (type) => {

    }

    return (
        <StateContext.Provider value={{
            data,
            addUser,
            deleteUser,
            onOpen, 
            onUpdate,
            handleChange

        }}>
            {children}
        </StateContext.Provider>
    )
}
