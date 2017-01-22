import React from 'react';
import ReactDOM from 'react-dom';
import Voting from './components/Voting';

const pair = ['Trainspotting', 'Another Option'];

ReactDOM.render(
  <Voting pair={pair} />,
  document.getElementById('root')
);
