import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { Amplify } from 'aws-amplify';
import config from './amplifyconfiguration.json';

Amplify.configure(config);
Amplify.configure({
    API:{
        GraphQL:{
            endpoint: 'https://ato5js2u75gd5e337hi62w3pla.appsync-api.ap-south-1.amazonaws.com/graphql',
            region: 'ap-south-1',
            defaultAuthMode: 'apiKey',
            apiKey: 'da2-c56pormu3bg25mkbrsrb2ujx4e'
        }
    }
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
