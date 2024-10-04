import {createBrowserRouter,RouterProvider} from "react-router-dom";
import AdminPage from './pages/AdminPage/AdminPage';
import MainPage from './pages/MainPage/MainPage';
import ProductPage from './pages/ProductPage/ProductPage';
import LoginPage from './pages/AuthPage/LoginPage';
import MainLayout from './widgets/PageLayout/MainLayout/MainLayout';
import RegisterPage from './pages/AuthPage/RegisterPage';
import WishlistPage from './pages/WishlistPage/WishlistPage';
import CartPage from './pages/CartPage/CartPage';
import PaymentPage from "./pages/PaymentPage/PaymentPage";
import ProductsPage from './pages/ProductsPage/ProductsPage'
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { useLazyRefreshQuery } from "./shared/redux/query/api";
import { setUser } from "./shared/redux/slices/userSlice";
import AuthLayout from "./widgets/PageLayout/AuthLayout";
import UserInfoPage from "./pages/ProfilePage/UI/UserInfo/UserInfoPage";
import UserReviewsPage from "./pages/ProfilePage/UI/Reviews/UserReviewsPage";
import UserOrdersPage from "./pages/ProfilePage/UI/Orders/UserOrdersPage";
import ProfilePageLayout from "./pages/ProfilePage/ProfilePageLayout";
import UserAddressBookPage from "./pages/ProfilePage/UI/Addresses/UserAddressBookPage";
function App() {
	const router = createBrowserRouter([
		{
			Component: MainLayout,
			children: [{
					path: "/",
					Component:MainPage,
					},
					{
					path: "/admin",
					Component: AdminPage,
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
						},
					]
					},
					{
					path: '*',
					element: <Navigate to={"/"} />,
					},
					{
					Component: AuthLayout,
					children: [
						{
							path: "/login",
							Component: LoginPage
						},
						{
							path: "/register",
							Component: RegisterPage
						}
					]
					}
				]

			},
	]);
	const dispatch = useDispatch()
	const [trigger] = useLazyRefreshQuery()
	const getUserData =async()=>{
		const response = await trigger().unwrap()
		dispatch(setUser(response))
	}
	useEffect(()=>{
		if(localStorage.getItem("token")){
			getUserData()
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	},[])
	const cartProducts = useSelector(state=>state.cart.cartProducts)
	const favouriteProducts = useSelector(state=>state.favourite.favouriteProducts)
	useEffect(()=>{
		localStorage.setItem('cart', JSON.stringify(cartProducts))
	},[cartProducts])
	useEffect(()=>{
		localStorage.setItem('favourite', JSON.stringify(favouriteProducts))
	},[favouriteProducts])

  return (
	<RouterProvider router={router} />
  )
}

export default App
