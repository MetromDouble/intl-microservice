import configureStoreProd from './configureStore.prod';
import configureStoreDev from './configureStore.dev';

/* eslint-disable import/no-mutable-exports */
let exportedStore;

if (process.env.NODE_ENV === 'production') {
  exportedStore = configureStoreProd;
} else {
  exportedStore = configureStoreDev;
}

export default exportedStore;
