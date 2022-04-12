import { RouteProps } from "react-router-dom";
import Home from "../pages/Home";

export interface MyRouteProps extends RouteProps {
    name: string
    label: string
}

const routes: MyRouteProps[] = [
    {
        name: 'home',
        label: 'Home',
        path: '/',
        element: <Home/>
    },
];
export default routes;