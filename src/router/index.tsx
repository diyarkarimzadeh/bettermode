import { Route, Routes } from 'react-router-dom';
import routeConfig from './routeConfig';
import RouteSection from './Route';

const Router = () => {
  return (
    <Routes>
      {routeConfig.map((r) => (
        <Route
          path={r.path}
          element={<RouteSection component={r.component} path={r.path} />}
          key={r.path}
        />
      ))}
    </Routes>
  );
};

export default Router;
