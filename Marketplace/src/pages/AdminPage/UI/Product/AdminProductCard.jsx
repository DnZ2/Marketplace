import image from "../../../../assets/nophoto.png"
import CopyIcon from "../../../../assets/copy-svgrepo-com.svg?react"
import Edit from "../../../../assets/edit-svgrepo-com.svg?react"
import Delete from "../../../../assets/remove.svg?react"
import Accept from "../../../../assets/checked-svgrepo-com.svg?react"
import Cancel from "../../../../assets/cancel-svgrepo-com.svg?react"
import PropTypes from "prop-types"
import {useState, useRef, useEffect} from "react"
import { ProductImg } from "../../../../entities/Product/UI"
import { useAdminProductControlls } from "../../useAdminProductControlls"
const AdminProductCard = ({data, img=image}) => {
	const {
		handleFirstAction,
		handleSecondAction,
		discountInputRef,
		maxQuantityInputRef,
		priceInputRef,
		titleInputRef,
		isDeleting,
		isEditing
	} = useAdminProductControlls(data)
	const { id, category, currentPrice } = data
	const [showTooltip, setShowTooltip] = useState(false)
	const timer = useRef(null)
	const handleCopyId = ()=>{
		navigator.clipboard.writeText(id)
		setShowTooltip(true)
	}
	useEffect(()=>{
		if(showTooltip){
			timer.current = setTimeout(()=>setShowTooltip(false), 1000)
		}
		return ()=>{
			timer.current && clearTimeout(timer.current)
		}
	}, [showTooltip])
  return (
	<tr className="grid grid-cols-[2fr_1fr_1fr_1fr_1fr] items-center divide-x-2 [&>*]:h-full">
		<td className='flex items-center text-ellipsis overflow-hidden'>
			<ProductImg className='w-16 m-2' src={img} alt="no-photo" />
			<div className='flex flex-col w-full'>
				<input className="w-full pl-2 py-1 inline truncate" type="text" placeholder="Title" disabled={!isEditing} ref={titleInputRef}/>
				<button className="flex items-center gap-2 w-fit relative px-2" onClick={handleCopyId}>ID <CopyIcon />
					{showTooltip && <span className="absolute bottom-full bg-[#c3ecc5] left-0 w-fit px-2 rounded-md rounded-es-none">Copied</span> }
				</button>
				<span>{category}</span>
			</div>
		</td>
		<td className="flex flex-col h-full">
			<input className="w-full h-full p-2" type="text" placeholder="Price" disabled={!isEditing} ref={priceInputRef}/>
			{currentPrice!==priceInputRef.current?.value && <span className="p-2">{currentPrice}</span>}
		</td>
		<td>
			<input className="size-full p-2" type="number" placeholder="Discount" disabled={!isEditing} ref={discountInputRef}/>
		</td>
		<td>
			<input className="size-full p-2" type="number" placeholder="Quantity" disabled={!isEditing} ref={maxQuantityInputRef}/>
		</td>
		<td className='flex justify-center items-center gap-2'>
			<button onClick={handleFirstAction} className='size-12 flex items-center justify-center hover:bg-[#db4444] rounded-md [&>svg]:hover:fill-white'>
				{isEditing || isDeleting ? <Accept /> : <Edit className="scale-150"/>}
			</button>
			<button onClick={handleSecondAction} className="size-12 flex items-center justify-center hover:bg-[#db4444] rounded-md [&>svg>g]:hover:fill-white [&>svg]:hover:stroke-white">
				{isEditing || isDeleting ? <Cancel /> : <Delete className="scale-150 fill-transparent"/>}
			</button>
		</td>
	</tr>
  )
}
AdminProductCard.propTypes = {
	data: PropTypes.object,
	img: PropTypes.string,
}

export default AdminProductCard
