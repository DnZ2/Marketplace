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
const MainPage = () => {
  return (
	<div className="container">
		<div className="flex flex-col gap-36">
			<div className="flex h-[50vh]">
				<Slider />
			</div>
			<div className="flex flex-col gap-16 overflow-hidden">
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
	</div>
  )
}

export default MainPage
