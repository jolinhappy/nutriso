import { createHashRouter, RouteObject } from 'react-router-dom';
import BMRAndTDEECalculator from 'SRC/pages/BMRAndTDEECalculator';

const routeSetting: RouteObject[] = [
  {
    path: '/',
    element: <BMRAndTDEECalculator />,
  },
];

const router = createHashRouter(routeSetting);
export default router;
