import image from "assets/nophoto.png"
import {ComponentPropsWithoutRef} from "react"
import { ProductImg } from "entities/Product/UI"
import { Ban, Check, Copy, Pencil, Trash2 } from "lucide-react"
import { Product } from "shared/redux/query/endpoints"
import Button from "shared/UI/Button/Button"
import { toast } from "react-toastify"
import useEvent from "react-use-event-hook"

interface Props extends ComponentPropsWithoutRef<"tr">{
    data: Product
}

const AdminProductCard = ({data, style}: Props) => {

    const handleCopyId = useEvent(async()=>{
        const id = await navigator.clipboard.readText()
        navigator.clipboard.writeText(data.id)
        if(id!==data.id)toast.success("Product ID copied", {hideProgressBar: true})
    })
    return (
        <div style={style} className="grid grid-cols-[2fr_1fr_1fr_1fr_1fr] items-center divide-x-2">
            <div className='flex items-center'>
                <ProductImg className='w-16 m-2' src={image} alt="no-photo" />
                <div className='flex flex-col w-full'>
                    {data.title}
                    <Button variant={"empty"} size={"empty"} className="flex gap-2" onClick={handleCopyId}>
                        ID <Copy />
                    </Button>
                </div>
            </div>
            <div className="flex flex-col h-full">
                {"Price"}
            </div>
            <div>
                {"Discount"}
            </div>
            <div>
                {"Quantity"}
            </div>
            <div className='flex justify-center items-center gap-2'>
                <Button variant={"empty"} size={"empty"}>
                    <Pencil />
                </Button>
                <Button variant={"empty"} size={"empty"}>
                    <Trash2 />
                </Button>
            </div>
        </div>
    )
}

export default AdminProductCard
