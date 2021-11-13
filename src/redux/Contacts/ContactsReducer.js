import {combineReducers} from "redux";
import {createReducer} from "@reduxjs/toolkit";
import {addContactItem, changeFilterItem, deleteContactItem} from "./ContactsAction";


const contactsReducer = createReducer([], {
  [addContactItem]: (state, {payload}) => [...state, payload],
  [deleteContactItem]: (state, {payload}) => state.filter(({id}) => id !== payload)
})

const changeFilter = createReducer("", {
  [changeFilterItem]: (_, {payload}) => payload
})


export default combineReducers({contactsReducer, changeFilter})