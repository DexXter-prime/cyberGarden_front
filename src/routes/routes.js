import Operations from "../pages/Operations";
import Login from "../pages/Login";
import Registration from "../pages/RegistrationComponent/Registration";
import Stations from "../pages/Stations";
import LogOut from "../pages/LogOut";

export const routes = [
    {
        path: '/operations',
        element: Operations,
        isPrivate: true,
    },
    {
        path: '/login',
        element: Login,
        isPrivate: false
    },
    {
        path: '/registration',
        element: Registration,
        isPrivate: true
    },
    {
        path: '/stations',
        element: Stations,
        isPrivate: true
    },
    {
        path: '/logout',
        element: LogOut,
        isPrivate: true
    },
]
