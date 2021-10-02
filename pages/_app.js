import 'semantic-ui-css/semantic.min.css';
import '../styles/main.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import allReducers from '../reducers';

const store = createStore(
  allReducers,
  typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />;
    </Provider>
  );
};

export default MyApp;
