import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { Provider } from 'react-redux'; // Import the Provider component
import store from './store'; // Import your Redux store

import App from './App';
import './index.css';

import { theme } from './Theme';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}> {/* Wrap the App component with the Provider component */}
      <ChakraProvider theme={theme}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ChakraProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
