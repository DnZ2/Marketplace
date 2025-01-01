import image1 from "../../../assets/productImg1.png"
import image2 from "../../../assets/productImg2.png"
import image3 from "../../../assets/productImg3.png"
import image4 from "../../../assets/productImg4.png"
import image5 from "../../../assets/productImg5.png"
const ProductImagesLayout = () => {
    return (
        <div className="flex gap-8 min-w-[700px] max-h-[600px] h-full">
            <figure className=" flex flex-col gap-4">
                <img className="h-[25%] w-full bg-[#f0f0f0] px-6 py-3 object-contain rounded-md" src={image1} alt="img" />
                <img className="h-[25%] w-full bg-[#f0f0f0] px-6 py-3 object-contain rounded-md" src={image2} alt="img" />
                <img className="h-[25%] w-full bg-[#f0f0f0] px-6 py-3 object-contain rounded-md" src={image3} alt="img" />
                <img className="h-[25%] w-full bg-[#f0f0f0] px-6 py-3 object-contain rounded-md" src={image4} alt="img" />
            </figure>
            <figure className="bg-[#f5f5f5] flex-grow flex justify-center items-center rounded-md">
                <img className="w-[70%] object-contain" src={image5} alt="img" />
            </figure>
        </div>
    )
}

export default ProductImagesLayout
