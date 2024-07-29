import CardListLayout from "../../../widgets/CardListLayout";
import Button from "../../../shared/UI/Button";
import Navigation from "../../../shared/UI/Navigation";
import 'swiper/css';
import "swiper/swiper-bundle.css"
import "swiper/css/autoplay"
import { useRef } from "react";
import { Swiper } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { SwiperSlide } from "swiper/react";
import MainProductLayout from "../../../entities/Product/UI/MainProductLayout";
import { useGetProductsQuery } from "../../../shared/redux/query/productsApi";
import Loader from "../../../shared/UI/Loader";
const FreshSales = () => {
	const swiperProductsRef = useRef(null);
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
				slidesPerView={4}
				onBeforeInit={(swiper) => {
					swiperProductsRef.current = swiper;
				}}
				autoplay={{
					pauseOnMouseEnter: true,
					delay:4000
				}}
				>
				{data?.products?.map((item)=>
				<SwiperSlide key={item.id}>
					<MainProductLayout data={item}/>
				</SwiperSlide>
				)}
			</Swiper>
	</CardListLayout>
  )
}

export default FreshSales
