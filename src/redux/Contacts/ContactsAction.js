import {v4 as uniqId} from "uuid";
import {createAction} from "@reduxjs/toolkit";


export const addContactItem = createAction("contact/add", (name, number) => {
  return {
    payload: {
      id: uniqId(),
      name,
      number,
    }
  }
})

export const deleteContactItem = createAction("contact/delete")

export const changeFilterItem = createAction("contact/filter")

