import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { PropsIRoute, PropsRouteWith } from './routerInterface';

const RouteWithProps = ({ path, exact, strict, render, location }: PropsRouteWith) => {
  return (
    <Route
      path={path}
      exact={exact}
      strict={strict}
      location={location}
      render={(props) => render({ ...props })}
    />
  );
};

const renderRouter = (routes: PropsIRoute[], extraProps = {}, switchProps = {}) => {
  return routes ? (
    <Switch {...switchProps}>
      {routes.map((route: any, i: number) => {
        if (route.redirect) {
          return (
            <Redirect
              key={route.key || i}
              from={route.path}
              to={route.redirect}
              exact={route.exact}
              strict={route.strict}
            />
          );
        }
        return (
          <RouteWithProps
            key={route.key || i}
            path={route.path}
            exact={route.exact}
            strict={route.strict}
            render={(props) => {
              const childRoutes = renderRouter(
                route.routes,
                {},
                {
                  location: props.location,
                }
              );
              if (route.component) {
                const newProps = {
                  ...props,
                  ...extraProps,
                };
                return (
                  <route.component {...newProps} route={route}>
                    {childRoutes}
                  </route.component>
                );
              }
              return childRoutes;
            }}
          />
        );
      })}
    </Switch>
  ) : null;
};

export default renderRouter;
