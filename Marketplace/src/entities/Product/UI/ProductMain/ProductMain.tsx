import { ComponentPropsWithoutRef, FC,  } from "react"

const ProductMain: FC<ComponentPropsWithoutRef<"div">> = ({className, children}) => {
    return (
        <div className={`flex justify-center items-center rounded-lg overflow-hidden bg-[#f0f0f0] relative aspect-square ${className}`}>
            {children}
        </div>
    )
}

export default ProductMain
