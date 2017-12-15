import { createStore, applyMiddleware, compose } from 'redux'
import bankReducer from './BankReducer';
import thunk from 'redux-thunk';
import { persistState } from 'redux-devtools';
import DevTools from './DevTools';


const enhancer = compose(
    applyMiddleware(thunk),
    DevTools.instrument(),
    persistState(
      window.location.href.match(
        /[?&]debug_session=([^&#]+)\b/
      )
    )
);



const bankStore = createStore(bankReducer, enhancer);
if (module.hot) {
    module.hot.accept('./BankReducer', () =>
        bankStore.replaceReducer(require('./BankReducer').default)
    );
}

export default bankStore;