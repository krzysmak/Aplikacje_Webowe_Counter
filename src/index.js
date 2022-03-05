import { createStore } from 'redux';
import counterReducer from './reducer';
import { init, render } from './render';

const store = createStore(counterReducer);
init(store);
render(store);
store.subscribe(() => {
    render(store);
});
