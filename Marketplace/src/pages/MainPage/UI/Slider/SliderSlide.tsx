import { NavLink } from "react-router-dom"
import iPhone from "../../../../assets/hero_endframe__cvklg0xk3w6e_large 2.png"
import Apple from "../../../../assets/1200px-Apple_gray_logo 1.png"
import ArrowRight from "../../../../assets/arrowUp.svg?react"
const SliderSlide = () => {
    return (
        <div className="relative pl-16 pb-14 flex flex-col  h-full text-white ">
            <article className="w-[45%] flex flex-col justify-end gap-5 h-full">
                <div className="flex gap-6 items-center">
                    <img src={Apple} alt="apple" />
                    <p>iPhone 14 Series</p>
                </div>
                <h1 className="text-5xl font-semibold">Up to 10% off Voucher</h1>
                <NavLink to={"/"} className="flex items-center gap-2 w-fit">
                    <h2 className="border-b-2 text-base font-medium pb-1">Shop Now</h2>
                    <ArrowRight className="[&>path]:stroke-white rotate-90"/>
                </NavLink>
            </article>
            <img className="w-[50%] absolute right-0 top-10 h-full object-contain opac" src={iPhone} alt="phone" />
        </div>
    )
}

export default SliderSlide
