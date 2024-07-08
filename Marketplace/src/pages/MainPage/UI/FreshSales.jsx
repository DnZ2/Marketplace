import CardListLayout from "../../../widgets/Layout/CardListLayout";
import Button from "../../../shared/UI/Button";
import Navigation from "../../../shared/UI/Navigation";
import 'swiper/css';
import "swiper/swiper-bundle.css"
import "swiper/css/autoplay"
import { useRef } from "react";
import { Swiper } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { SwiperSlide } from "swiper/react";
import ProductCardLayout from "../../../entities/Product/UI/ProductCardLayout";
import { useGetProductsQuery } from "../../../shared/redux/query/productsApi";
import Loader from "../../../shared/UI/Loader";
const FreshSales = () => {
	const swiperProductsRef = useRef();
	const {data, isLoading} = useGetProductsQuery({})
	if(isLoading){
		return <Loader />
	}
	return (
	<CardListLayout
		title="Today’s"
		subtitle="Flash Sales"
		showMore={<Button>View All Products</Button>}
		controls={<Navigation next={()=>swiperProductsRef.current?.slideNext()} prev={()=>swiperProductsRef.current?.slidePrev()}/>}>
			<Swiper
				modules={[Autoplay]}
				className="w-full"
				loop
				slidesPerGroup={2}
				spaceBetween={30}
				slidesPerView={5}
				onBeforeInit={(swiper) => {
					swiperProductsRef.current = swiper;
				}}
				autoplay={{
					pauseOnMouseEnter: true,
					delay:4000
				}}
				>
				{data?.products?.map((item)=>{
				return <SwiperSlide key={item.id}>
					<ProductCardLayout
						data={item}
					/>
				</SwiperSlide>
				})}

			</Swiper>
	</CardListLayout>
  )
}

export default FreshSales
