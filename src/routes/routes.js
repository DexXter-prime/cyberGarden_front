import Operations from "../pages/Operations";
import Login from "../pages/Login";
import Registration from "../pages/RegistrationComponent/Registration";

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
    }
]
