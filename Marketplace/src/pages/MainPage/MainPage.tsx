import {
    Agitation,
    BestSellingProducts,
    CategoriesSlider,
    FLashSales,
    GridProducts,
    OurProducts,
    ProductWithTimer,
    Slider
} from "./UI"
import ScrollButton from "../../features/ScrollButton/ScrollButton"
const MainPage = () => {
    return (
        <>
            <div className="container flex flex-col gap-16 mb-16">
                <Slider />
                <div className="flex flex-col gap-16">
                    <FLashSales />
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
