import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';

// Old links used hash routing (e.g. https://www.ndnex.com/#/about).
// Send those visitors to the clean URL before the app starts.
const legacyHash = window.location.hash;
if (legacyHash.startsWith('#/')) {
  window.history.replaceState(null, '', legacyHash.slice(1) || '/');
}

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Could not find root element to mount to');
}

const app = (
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// Pages are pre-rendered to static HTML at build time; hydrate when that HTML
// matches the current URL, otherwise render from scratch.
const normalize = (path: string) => path.replace(/\/+$/, '') || '/';
const prerenderedPath = rootElement.getAttribute('data-path');
if (
  rootElement.hasChildNodes() &&
  prerenderedPath !== null &&
  normalize(prerenderedPath) === normalize(window.location.pathname)
) {
  ReactDOM.hydrateRoot(rootElement, app);
} else {
  ReactDOM.createRoot(rootElement).render(app);
}
