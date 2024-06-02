import { RouterProvider } from 'react-router-dom';
// import { useState } from 'react';
import router from 'SRC/router';
import './App.css';

const App = () => {
  // const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <RouterProvider router={router} />
      </div>
    </>
  );
};

export default App;
