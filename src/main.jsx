import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

import { AppProvider } from './context/context';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* 
      Wrapping the main App component with AppProvider.
      The AppProvider component is responsible for setting up the shared states and functions using React context.
      By wrapping the App component inside the AppProvider, all child components of App will have access 
      to the shared states and functions provided by the AppProvider without the need to pass them explicitly through props. 
  */}
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>,
);
