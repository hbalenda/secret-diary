import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Match, Miss } from 'react-router';

import NotFound from './components/NotFound';
import SignIn from './components/SignIn';
import App from './components/App';
import './css/style.css';

const Root = () => {
  return (
    <BrowserRouter>
      <div>
        <Match pattern="/" component={App} />
        <Miss component={NotFound} />
      </div>
    </BrowserRouter>
  )
}

render(<Root />, document.querySelector('#main'));
