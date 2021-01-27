import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import {Provider} from "react-redux";
import {store} from './redux/store';

import './i18n';
import SuspenseLoader from "./components/view/SupenseLoader/SupenseLoader";

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <Suspense fallback={<SuspenseLoader/>}>
                <App/>
            </Suspense>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

