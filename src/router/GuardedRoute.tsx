import { TRoute } from './routeConfig';

export default function GuardedRoute(route: TRoute) {
  const { component: Component } = route;

  return <Component />;
}
