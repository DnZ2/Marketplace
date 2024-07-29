import CardListLayout from "../../../widgets/CardListLayout";
import Navigation from "../../../shared/UI/Navigation";
import { SwiperSlide, Swiper } from "swiper/react";
import Phones from "../../../assets/Category-CellPhone.svg?react"
import { useRef } from "react";
import { useGetCategoriesQuery } from "../../../shared/redux/query/productsApi";
import 'swiper/css';
import "swiper/swiper-bundle.css"
import Loader from "../../../shared/UI/Loader";
import { NavLink } from "react-router-dom";
const CategoriesSlider = () => {
	const swiperCategoriesRef= useRef(null)
	const {data, isLoading} = useGetCategoriesQuery()
	if(isLoading){
		return <Loader />
	}
  return (
	<CardListLayout
	title="Categories"
	subtitle="Browse By Category"
	controls={<Navigation next={()=>swiperCategoriesRef.current?.slideNext()} prev={()=>swiperCategoriesRef.current?.slidePrev()}/>}>
	<Swiper
			className="w-full"
			loop
			slidesPerGroup={1}
			spaceBetween={30}
			slidesPerView={5}
			onBeforeInit={(swiper) => {
				swiperCategoriesRef.current = swiper;
			}}>
		{data?.map((item)=>
		<SwiperSlide key={item}>
			<NavLink to={`/products?category=${item}`} className="flex flex-col justify-center items-center gap-4 border-[1px] border-[#7D8184] rounded py-6 hover:bg-[#db4444] [&>svg>g>path]:hover:stroke-white [&>svg>g>line]:hover:stroke-white [&>p]:hover:text-white hover:border-none">
				<Phones />
				<p>{item}</p>
			</NavLink>
		</SwiperSlide>
		)}
	</Swiper>
	</CardListLayout>
  )
}

export default CategoriesSlider
