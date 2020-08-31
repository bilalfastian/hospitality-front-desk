import * as React from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import { configureStore } from '../shared/store';
import App from '../shared/App';
import IntlProvider from '../shared/i18n/IntlProvider';
import createHistory from '../shared/store/history';

const client = new ApolloClient({
    uri: 'https://48p1r2roz4.sse.codesandbox.io',
    cache: new InMemoryCache(),
});

const history = createHistory();

// Create/use the store
// history MUST be passed here if you want syncing between server on initial route
const store =
    window.store ||
    configureStore({
        initialState: window.__PRELOADED_STATE__,
    });

hydrate(
    <ApolloProvider client={client}>
        <Provider store={store}>
            <Router history={history}>
                <IntlProvider>
                    <HelmetProvider>
                        <App />
                    </HelmetProvider>
                </IntlProvider>
            </Router>
        </Provider>
    </ApolloProvider>,
    document.getElementById('app')
);

if (process.env.NODE_ENV === 'development') {
    if (module.hot) {
        module.hot.accept();
    }

    if (!window.store) {
        window.store = store;
    }
}
