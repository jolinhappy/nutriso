import { createHashRouter, RouteObject } from 'react-router-dom';

const routeSetting: RouteObject[] = [
  {
    path: '/',
    element: <div>Hello world!</div>,
  },
];

const router = createHashRouter(routeSetting);
export default router;
