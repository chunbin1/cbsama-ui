import React from 'react';
import ReactDOM from 'react-dom';
import DemoMessArticles from './demo/Demo1';
import DemoErrorBoundary from './DemoErrorrBoundary';

const App = () => {
  return (
    <div>
      <DemoErrorBoundary />
      {/* <DemoMessArticles /> */}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
