import TopHeader from "./TopHeader"
import Header from "./Header"
import Footer from "./Footer"
import { Outlet } from "react-router-dom"

const MainLayout = () => {
  return (
	<div className="min-h-full flex flex-col">
		<TopHeader/>
		<Header/>
		<main className="flex-grow flex flex-col"><Outlet/></main>
		<Footer/>
	</div>
  )
}

export default MainLayout
