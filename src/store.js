//The word "thunk" is a programming term that means "a piece of code that does some delayed work". Rather than execute some logic now, we can write a function body or code that can be used to perform the work later.
import { createStore, applyMiddleware}  from 'redux'
import { composeWithDevTools} from 'redux-devtools-extension'  
import thunk from 'redux-thunk'
import rootReducer from './reducers'

const middleware = [thunk];
const initialState = {};

const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;