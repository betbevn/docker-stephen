import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { allRoutes } from "./routes";
import { AppRoutesProps } from "./types/routes";
import Layout from "./components/layout";

function RouteWithSubRoutes(route: AppRoutesProps) {
  return route.subRoutes && route.subRoutes.length > 0 ? (
    <Route // In case of nested routes
      path={route.path}
      render={({ match: { url } }) => {
        return (
          <>
            {route.subRoutes?.map((item) => {
              const path = item.exact ? url : `${url}/${item.path}`;
              return (
                <Route
                  key={path}
                  exact={item.exact}
                  path={path}
                  component={item.component}
                />
              );
            })}
          </>
        );
      }}
    />
  ) : (
    <Route exact={route.exact} path={route.path} component={route.component} /> // Normal routes
  );
}

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          {allRoutes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
          ))}
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
