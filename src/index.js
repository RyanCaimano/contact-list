import { BrowserRouter} from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const App = () => (
  <div>
    <h1>Hello World</h1>
  </div>
);







const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
      <BrowserRouter> 
        <App />
      </BrowserRouter>
  </React.StrictMode>
);
