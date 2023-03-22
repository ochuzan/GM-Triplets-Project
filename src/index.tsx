import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider, Outlet, Route } from "react-router-dom";
import WelcomeModal from './components/WelcomeModal/WelcomeModal';
import Board from './components/Board/Board';
import { Auth0Provider } from '@auth0/auth0-react';
import { Auth0ProviderWithNavigate } from './auth0-provider-with-navigate';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const Auth0ProviderLayout = () => (
  <Auth0ProviderWithNavigate>
    <Outlet />
  </Auth0ProviderWithNavigate>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Auth0ProviderLayout />,
    children: [
      {
        path: "",
        element: <App />
      },
      {
        path: "start-game",
        element: <WelcomeModal />
      },
      {
        path: "board",
        element: <Board />
      },
    ]
  },

]);


root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
    {/* <Auth0Provider>
    </Auth0Provider> */}
  </React.StrictMode>
);
