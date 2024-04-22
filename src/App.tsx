import React from 'react';
import ReactDOM from "react-dom";

const App: React.FC = () => {
  return (
    <div>
      Hello World
    </div>
  )
};

export default App;

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
