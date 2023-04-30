import './App.css';

import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import { routes } from './routes/routes/routes';

function App() {
  return (
    <div className="App">
      <Toaster position="bottom-right"
  reverseOrder={false}/>
      <RouterProvider router={routes}/>
    </div> 
  );
}

export default App;
