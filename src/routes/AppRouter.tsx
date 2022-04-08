import { Switch, Route } from "react-router-dom";
import routes from "./index";

const AppRouter: React.FunctionComponent = () => {
  return (
    <Switch>
      {routes.map((route, key) => {
        return (
          <Route
            key={key}
            path={route.path}
            component={route.component}
            exact={route.exact === true}
          />
        );
      })}
    </Switch>
  );
};

export default AppRouter;

// const AppRouter: React.FunctionComponent = () => {
//   const history = useHistory<{ show_dialog_search?: boolean }>();
//   return (
//     <Router history={history}>
//       {routes.map((route, key) => {
//         return (
//           <Route
//             key={key}
//             path={route.path}
//             component={route.component}
//             exact={route.exact === true}
//           />
//         );
//       })}
//     </Router>
//   );
// };