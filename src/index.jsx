import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { Main } from './Components/Main/Main.jsx';

// const router = createBrowserRouter([
//   {
//     path: "/vite-react-router/",
//     element: <App />,
//     children: [
//       {
//         path: "/vite-react-router/",
//         element: <Main />,
//       },
//       {
//         path: "/vite-react-router/contact",
//         element: <Parners />,
//       },
//     ],
//   },
// ]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
