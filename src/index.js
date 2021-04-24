// needed for regenerator-runtime
import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import App from '@containers/App';
import './index.scss';

ReactDOM.render(<App />, document.getElementById('root'));
