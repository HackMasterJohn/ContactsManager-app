import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import { App } from './components/App.js';
import { SaveContact } from './pages/SaveContact.js';
import { SideBarMenu } from './components/SideBarMenu.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SaveContact />
  </React.StrictMode>
);

