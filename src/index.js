import React from 'react';
import ReactDOM from 'react-dom';
import { SpeechProvider } from '@speechly/react-client';

import './index.css';

import App from './App';
import { Provider } from './context/context';

ReactDOM.render(
    <SpeechProvider appId="58a5babe-d92e-4b0d-915a-ad67675ae3ce" language="en-US">
        <Provider>
            <App />
        </Provider>
    </SpeechProvider>,
    document.getElementById('root')
);