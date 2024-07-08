import {createBrowserRouter,RouterProvider} from "react-router-dom";
import AdminPage from './pages/AdminPage/AdminPage';
import MainPage from './pages/MainPage/MainPage';
import ProductPage from './pages/ProductPage/ProductPage';
import LoginPage from './pages/AuthPage/LoginPage';
import MainLayout from './widgets/Layout/PageLayout/MainLayout';
import RegisterPage from './pages/AuthPage/RegisterPage';
import WishlistPage from './pages/WishlistPage/WishlistPage';
import CartPage from './pages/CartPage/CartPage';
import PaymentPage from "./pages/PaymentPage/PaymentPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import ProductsPage from './pages/ProductsPage/ProductsPage'
import { useEffect } from "react";
import {  useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
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
					path: "/register",
					Component:RegisterPage,
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
					Component:ProfilePage,
					},
					{
					path: '*',
					element: <Navigate to={"/"} />,
					},
					{
					path: "/login",
					Component: LoginPage,
			}]

		},
	]);
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
