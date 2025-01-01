import JBL from "../../../assets/JBL_BOOMBOX_2_HERO_020_x1 (1) 1.png"

const ProductWithTimer = () => {
    return (
        <section className="relative px-14 py-16 bg-black bg-[radial-gradient(circle_at_80%_50%,_#2f2f2f,_#000000)]">
            <div className="text-white flex flex-col gap-8">
                <h1 className="text-[#00FF66] semibold">Categories</h1>
                <p className="text-5xl font-semibold w-[33%]">Enhance Your Music Experience</p>
                <div className="flex gap-6 items-center text-black">
                    <div className="bg-[#ffffff] size-16 rounded-full flex flex-col justify-center items-center"><span className="font-semibold">23</span><span className="text-xs">Hours</span></div>
                    <div className="bg-[#ffffff] size-16 rounded-full flex flex-col justify-center items-center"><span className="font-semibold">05</span><span className="text-xs">Days</span></div>
                    <div className="bg-[#ffffff] size-16 rounded-full flex flex-col justify-center items-center"><span className="font-semibold">59</span><span className="text-xs">Minutes</span></div>
                    <div className="bg-[#ffffff] size-16 rounded-full flex flex-col justify-center items-center"><span className="font-semibold">35</span><span className="text-xs">Seconds</span></div>
                </div>
                <button className="px-12 py-4 w-fit bg-lime-500 rounded">Buy Now!</button>
            </div>
            <figure className="absolute right-0 top-1/2 -translate-y-1/2 w-[50%]">
                <img className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" src={JBL} alt="" />
            </figure>
        </section>
    )
}

export default ProductWithTimer
