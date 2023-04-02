import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

const firstReducer = (state=0,action)=>{
    switch(action.type){
        case 'add':
            return state+1;
        case 'minus':
            return state-1;
        default:
            return state;

    }
}

//create store, put in reducer
const store = createStore(firstReducer, applyMiddleware(thunk,logger))

export default store