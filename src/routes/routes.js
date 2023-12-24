import Operations from "../pages/Operations";
import Login from "../pages/Login";
import Registration from "../pages/RegistrationComponent/Registration";
import Trains from "../pages/Trains/Trains";
import Stations from "../pages/Stations";

export const routes = [
    {
        path: '/operations',
        element: Operations
    },
    {
        path: '/login',
        element: Login
    },
    {
        path: '/registration',
        element: Registration
    },
    {
        path: '/stations',
        element: Stations
    }
]
