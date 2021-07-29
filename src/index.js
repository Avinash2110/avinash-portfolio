import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {PageProvider} from "./PageContext"

ReactDOM.render(
  <React.StrictMode>
    <PageProvider>
      <App />
    </PageProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

