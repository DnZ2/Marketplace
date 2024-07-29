import { Autoplay, EffectFade, Pagination} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import SliderSlide from './SliderSlide';
const Slider = () => {
  return (
		<div className="bg-black flex h-[50vh]">
			<Swiper
				modules={[Pagination, EffectFade, Autoplay]}
				slidesPerView={1}
				loop
				autoplay={{
					delay:5000,
					pauseOnMouseEnter: true,
				}}
				effect={'fade'}
				fadeEffect={{
					crossFade: true
				}}
				pagination={{
					clickable: true,
					bulletClass: "inline-block size-3 rounded-full bg-white opacity-20 mx-1",
					bulletActiveClass: "border-2 border-white !bg-[#db4444] !opacity-100"
				}}
			>
				{[1,2,3].map((el)=><SwiperSlide key={el}><SliderSlide /></SwiperSlide>)}
			</Swiper>
		</div>
  )
}

export default Slider
