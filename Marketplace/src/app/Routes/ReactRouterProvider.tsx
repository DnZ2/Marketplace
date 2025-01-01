import {createBrowserRouter,RouterProvider} from "react-router-dom";
import AdminPage from '../../pages/AdminPage/AdminPage';
import MainPage from '../../pages/MainPage/MainPage';
import ProductPage from '../../pages/ProductPage/ProductPage';
import LoginPage from '../../features/AuthActions/UI/LoginForm';
import RootLayout from '../../widgets/RootLayout/RootLayout';
import RegisterPage from '../../features/AuthActions/UI/RegisterForm';
import WishlistPage from '../../pages/WishlistPage/WishlistPage';
import CartPage from '../../pages/CartPage/CartPage';
import PaymentPage from "../../pages/PaymentPage/PaymentPage";
import ProductsPage from '../../pages/ProductsPage/ProductsPage'
import { Navigate } from "react-router-dom";
import AuthLayout from "../../pages/AuthPage/AuthLayout";
import UserInfoPage from "../../pages/ProfilePage/UserInfo/UserInfoPage";
import UserReviewsPage from "../../pages/ProfilePage/Reviews/UserReviewsPage";
import UserOrdersPage from "../../pages/ProfilePage/Orders/UserOrdersPage";
import ProfilePageLayout from "../../pages/ProfilePage/Layout/ProfilePageLayout";
import UserAddressBookPage from "../../pages/ProfilePage/Addresses/UserAddressBookPage";
import RoutesWithAuth from "./RoutesWithAuth";
import RoutesWithAdminRole from "./RoutesWithAdminRole";
const ReactRouterProvider = () => {
    const router = createBrowserRouter([
        {
            Component: RoutesWithAuth,
            children: [{
                Component: RootLayout,
                children: [{
                    Component: RoutesWithAdminRole,
                    children: [{
                        path: "/admin",
                        Component: AdminPage
                    }]

                },
                {
                    path: "/profile",
                    Component:ProfilePageLayout,
                    children: [
                        {
                            index: true,
                            Component:UserInfoPage
                        },
                        {
                            path: "reviews",
                            Component:UserReviewsPage
                        },
                        {
                            path: "addresses",
                            Component:UserAddressBookPage
                        },
                        {
                            path: "orders",
                            Component:UserOrdersPage
                        },]
                }],
            }]
        },
        {
            Component: RootLayout,
            children: [{
                path: "/",
                Component:MainPage,
            },
            {
                path: "/products/:id",
                Component:ProductPage,
            },
            {
                path: "/wishlist",
                Component:WishlistPage,
            },
            {
                path: "/cart",
                Component:CartPage,
            },
            {
                path: "/products",
                Component:ProductsPage,
            },
            {
                path: "/payment",
                Component:PaymentPage,
            },
            {
                Component: AuthLayout,
                children: [{
                    path: "/login",
                    Component: LoginPage
                },
                {
                    path: "/register",
                    Component: RegisterPage
                }]
            }]

        },
        {
            path: '*',
            element: <Navigate to={"/"} />,
        },
    ]);
    return (
        <RouterProvider router={router}/>
    )
}

export default ReactRouterProvider
