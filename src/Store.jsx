import React from 'react'
import { applyMiddleware, combineReducers, createStore } from 'redux'
import { DashboardReducer, DistributorListReducer } from './Redux/Reducer/DashboardReducer'
import { thunk } from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { UserReducer } from './Redux/Reducer/UserReducer';


const reducer = combineReducers({
    dashboard:DashboardReducer,
    userlist:UserReducer,
    distributorList:DistributorListReducer
 })
 const initialState = {};
 const Store = createStore(reducer, initialState,  composeWithDevTools(
     applyMiddleware(thunk)
     // other store enhancers if any
   ));
 
export default Store;
