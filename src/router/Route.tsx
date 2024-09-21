import { TRoute } from './routeConfig';

export default function RouteSection(route: TRoute) {
  const { component: Component } = route;

  return <Component />;
}
