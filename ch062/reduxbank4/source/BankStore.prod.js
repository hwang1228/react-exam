import { createStore, applyMiddleware } from 'redux'
import bankReducer from './BankReducer';
import thunk from 'redux-thunk';

const bankStore = createStore(bankReducer, applyMiddleware(thunk));
export default bankStore;