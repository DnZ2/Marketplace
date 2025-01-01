import CardListLayout from "../../../widgets/CardListLayout";
import Navigation from "./Navigation";
import 'swiper/css';
import "swiper/swiper-bundle.css"
import "swiper/css/autoplay"
import { useRef } from "react";
import { Swiper } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { SwiperSlide } from "swiper/react";
import { useGetProductsQuery } from "../../../shared/redux/query/endpoints/productsApi";
import Loader from "../../../shared/UI/Loader";
import MainProductCard from "../../../widgets/MainProductCard";
const FLashSales = () => {
    const swiperProductsRef = useRef(null);
    const {data, isLoading} = useGetProductsQuery({})
    if(isLoading){
        return <Loader />
    }
    return (
        <CardListLayout
            title="Today’s"
            subtitle="Flash Sales"
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
                        <MainProductCard data={item}/>
                    </SwiperSlide>
                )}
            </Swiper>
        </CardListLayout>
    )
}

export default FLashSales