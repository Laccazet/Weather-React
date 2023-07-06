import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css";
import ContextProvider from './context/dataContext';
import App from './component/App';


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ContextProvider>
    <App />
  </ContextProvider>
)