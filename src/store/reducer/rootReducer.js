import { combineReducers } from "redux";

import { UserReducer } from "./userReducer";





export const RootReducer = combineReducers((
     user: UserReducer,
));