import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from './pages/login';
import "./App.css";
import "./pages/util.css";
import '@csstools/normalize.css';



const router = createBrowserRouter([
  {
    path: "/meu-time",
    element: <Login/>,

  }
])

function App() {
  return (<RouterProvider router={router}/>);
}

export default App;
