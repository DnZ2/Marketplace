import {createBrowserRouter,RouterProvider} from "react-router-dom";
import RootLayout from '../../widgets/RootLayout/RootLayout';
import { Navigate } from "react-router-dom";
import AuthLayout from "../../pages/AuthPage/AuthLayout";
import ProfilePageLayout from "../../pages/ProfilePage/Layout/ProfilePageLayout";
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
                    children: [
                        {
                            path: "/product-manager",
                            lazy: async () => {
                                const {ProductsManager} = await import('pages/AdminPage/ProductsManager/ProductsManager');
                                return { Component: ProductsManager };
                            }
                        },
                        {
                            path: "/categories-manager",
                            lazy: async () => {
                                const {CategoriesManager} = await import('pages/AdminPage/CategoriesManager/CategoriesManager');
                                return { Component: CategoriesManager };
                            }
                        }
                    ]

                },
                {
                    path: "/profile",
                    Component:ProfilePageLayout,
                    children: [
                        {
                            index: true,
                            lazy: async () => {
                                const {UserInfoPage} = await import('pages/ProfilePage/UserInfo/UserInfoPage');
                                return { Component: UserInfoPage };
                            }
                        },
                        {
                            path: "reviews",
                            lazy: async () => {
                                const {UserReviewsPage} = await import('pages/ProfilePage/Reviews/UserReviewsPage');
                                return { Component: UserReviewsPage };
                            }
                        },
                        {
                            path: "addresses",
                            lazy: async () => {
                                const {UserAddressBookPage} = await import('pages/ProfilePage/Addresses/UserAddressBookPage');
                                return { Component: UserAddressBookPage };
                            }
                        },
                        {
                            path: "orders",
                            lazy: async () => {
                                const {UserOrdersPage} = await import('pages/ProfilePage/Orders/UserOrdersPage');
                                return { Component: UserOrdersPage };
                            }
                        },]
                }],
            }]
        },
        {
            Component: RootLayout,
            children: [{
                path: "/",
                lazy: async () => {
                    const {MainPage} = await import('pages/MainPage/MainPage');
                    return { Component: MainPage };
                }
            },
            {
                path: "/products/:id",
                lazy: async () => {
                    const {ProductPage} = await import('pages/ProductPage/ProductPage');
                    return { Component: ProductPage };
                }
            },
            {
                path: "/wishlist",
                lazy: async () => {
                    const {WishlistPage} = await import('pages/WishlistPage/WishlistPage');
                    return { Component: WishlistPage };
                }
            },
            {
                path: "/cart",
                lazy: async () => {
                    const {CartPage} = await import('pages/CartPage/CartPage');
                    return { Component: CartPage };
                }
            },
            {
                path: "/products",
                lazy: async () => {
                    const {ProductsPage} = await import('pages/ProductsPage/ProductsPage');
                    return { Component: ProductsPage };
                }
            },
            {
                path: "/payment",
                lazy: async () => {
                    const {PaymentPage} = await import('pages/PaymentPage/PaymentPage');
                    return { Component: PaymentPage };
                }
            },
            {
                Component: AuthLayout,
                children: [{
                    path: "/login",
                    lazy: async () => {
                        const {LoginForm} = await import('features/AuthActions/UI/LoginForm');
                        return { Component: LoginForm };
                    }
                },
                {
                    path: "/register",
                    lazy: async () => {
                        const {RegisterForm} = await import('features/AuthActions/UI/RegisterForm');
                        return { Component: RegisterForm };
                    }
                }]
            }]

        },
        {
            path: '*',
            element: <Navigate to={"/"} />,
        },
    ], {
        future: {
            v7_relativeSplatPath: true,
        },
    });
    return (
        <RouterProvider router={router} future={{
            v7_startTransition: true,
        }}/>
    )
}

export default ReactRouterProvider
