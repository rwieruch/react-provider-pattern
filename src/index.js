import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import App, { ThemeProvider } from './App';

const coloredTheme = "green";

ReactDOM.render(
  <ThemeProvider coloredTheme={coloredTheme}>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);

registerServiceWorker();
