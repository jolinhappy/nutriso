import { createHashRouter, RouteObject } from 'react-router-dom';
import BMRAndTDEECalculator from 'SRC/pages/BMRAndTDEECalculator';
import LoginPage from 'SRC/pages/LoginPage';
import RegistrationPage from 'SRC/pages/RegistrationPage';

const routeSetting: RouteObject[] = [
  {
    path: 'register',
    element: <RegistrationPage />,
  },
  {
    path: 'login',
    element: <LoginPage />,
  },
  {
    path: '/',
    element: <BMRAndTDEECalculator />,
  },
];

const router = createHashRouter(routeSetting);
export default router;
