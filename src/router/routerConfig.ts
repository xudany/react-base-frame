import { PropsIRoute } from './routerInterface';

const routes: PropsIRoute[] = [
  {
    /* eslint-disable global-require */
    component: require('../components/test').default,
    path: '/test',
  },
];

export default routes;
