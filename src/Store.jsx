
import { applyMiddleware, combineReducers, createStore } from 'redux'
import { thunk } from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { UserReducer } from './Redux/Reducer/UserReducer';


const reducer = combineReducers({
    userlist:UserReducer,
 })
 const initialState = {};
 const Store = createStore(reducer, initialState,  composeWithDevTools(
     applyMiddleware(thunk)
     // other store enhancers if any
   ));
 
export default Store;
