import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/styles.css';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/App/App';
import { store } from './app/store';
import { Provider } from 'react-redux'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);

