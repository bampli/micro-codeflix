//import { Switch, Route } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import routes from "./index";

const AppRouter: React.FunctionComponent = () => {
  return (
    <Routes >
      {routes.map((route, key) => {
        return (
          <Route
            key={key}
            path={route.path}
            element={route.element}
            //element={`<${route.element}>`}
            //exact={route.exact === true}
          />
        );
      })}
    </Routes>
  );
};

export default AppRouter;

// const AppRouter: React.FunctionComponent = () => {
//   return (
//     <Switch>
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
//     </Switch>
//   );
// };