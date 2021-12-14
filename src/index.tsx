import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ThemeContainer from './contexts/theme/ThemeContainer';

ReactDOM.render(
  <React.StrictMode>
    <ThemeContainer>
      <App />
    </ThemeContainer>
  </React.StrictMode>,
  document.getElementById('root')
);
