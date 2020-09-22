import { PropsIRoute } from './routerInterface';
import App from '../App';
import NotFound from '../pages/NotFound';
import infrastructure from '../pages/infrastructure';
import purification from '../pages/purification';
import waterFactory from '../pages/waterFactory';

const routes: PropsIRoute[] = [
  {
    path: '/',
    component: App,
    routes: [
      {
        path: '/',
        redirect: '/infrastructure',
      },
      {
        name: '基础设施',
        path: '/infrastructure',
        routes: [
          {
            name: '基础设施',
            path: '/infrastructure',
            component: infrastructure,
          },
        ],
      },
      {
        name: '水质净化厂',
        path: '/purification',
        component: purification,
      },
      {
        name: '单一水厂',
        path: '/waterFactory/:id',
        component: waterFactory,
      },
    ],
  },
];

const notFoundRoute: PropsIRoute = {
  component: NotFound,
};

function addExactToRoute(routeConfig: PropsIRoute[]) {
  routeConfig.forEach((route) => {
    if (route.routes) {
      addExactToRoute(route.routes);
    } else {
      route.exact = true;
    }
  });
}

function addNotFoundAsFallbackRoute(routeConfig: PropsIRoute[]) {
  routeConfig.forEach((route) => {
    if (route.routes) {
      addNotFoundAsFallbackRoute(route.routes);
      route.routes.push(notFoundRoute);
    }
  });
}

addExactToRoute(routes);
addNotFoundAsFallbackRoute(routes);
routes.push(notFoundRoute);

export default routes;
