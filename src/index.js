import React from 'react';
import { render } from 'react-dom';

import Stater from './components/Starter';

const App = () => <div>
  <Stater/>
</div>;

render(<App/>, document.querySelector('#root'));
