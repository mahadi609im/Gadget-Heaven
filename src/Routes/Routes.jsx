import { createBrowserRouter } from 'react-router';
import Error from '../Pages/Error/Error';
import RootLayout from '../Pages/RootLayout/RootLayout';
import Home from '../Pages/Home/Home';
import Statistics from '../Pages/Statistics/Statistics';
import Dashboard from '../Pages/Dashboard/Dashboard';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout></RootLayout>,
    errorElement: <Error />,
    children: [
      {
        index: true,
        Component: Home,
        loader: () => fetch('../../public/gadget.json'),
      },
      {
        path: '/statistics',
        Component: Statistics,
      },
      {
        path: '/dashboard',
        Component: Dashboard,
      },
    ],
  },
]);

export { router };
