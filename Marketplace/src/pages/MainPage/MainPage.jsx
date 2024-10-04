import {
	Agitation,
	BestSellingProducts,
	CategoriesSlider,
	FreshSales,
	GridProducts,
	OurProducts,
	ProductWithTimer,
	Slider
} from "./UI"
import ScrollButton from "../../features/ScrollButton"
const MainPage = () => {
  return (
	<>
		<div className="container flex flex-col gap-36 mb-16">
			<Slider />
			<div className="flex flex-col gap-16">
				<FreshSales />
				<div className="h-px bg-[#7D8184]"></div>
				<CategoriesSlider />
				<div className="h-px bg-[#7D8184]"></div>
				<BestSellingProducts />
			</div>
			<div className="flex flex-col gap-16">
				<ProductWithTimer />
				<OurProducts />
			</div>
			<GridProducts />
			<Agitation />
		</div>
		<ScrollButton />
	</>

  )
}

export default MainPage
