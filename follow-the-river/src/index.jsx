import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { PlayersProvider } from './PlayersManager';
import { CardCountProvider } from './pages/GameSetup';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PlayersProvider>
      <CardCountProvider>
        <App />
      </CardCountProvider>
    </PlayersProvider>
  </React.StrictMode>
);

reportWebVitals();
