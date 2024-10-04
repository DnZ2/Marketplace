import image from "../../../assets/nophoto.png"
import CopyIcon from "../../../assets/copy-svgrepo-com.svg?react"
import PropTypes from 'prop-types';
import DeleteButton from "../../../features/Favourite/UI/DeleteButton";
import EditButton from "../../../features/Edit/UI/EditButton";
import { useAdminCardControlls } from "../../../pages/AdminPage/useAdminProductControlls";
import {ProductImg} from "../UI"
import { useState, useRef, useEffect } from "react";
const AdminProductLayout = ({data, img=image}) => {
	const {
		handleCloseDeleteField,
		handleCloseEditField,
		handleDeleteProduct,
		handleEditProduct,
		handleInputDiscount,
		handleInputMaxQuantity,
		handleInputPrice,
		handleInputTitle,
		handleOpenDeleteField,
		handleOpenEditField,
		discount,
		isDeleting,
		isEditing,
		maxQuantity,
		price,
		title
	} = useAdminCardControlls(data)
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
			<div className='flex flex-col'>
				<input className="w-full px-2 py-1" type="text" placeholder="Title" disabled={!isEditing} value={title} onChange={handleInputTitle}/>
				<button className="flex items-center gap-2 w-fit relative px-2" onClick={handleCopyId}>ID {<CopyIcon />}
					{showTooltip && <span className="absolute bottom-full bg-[#c3ecc5] left-0 w-fit px-2 rounded-md rounded-es-none">Copied</span> }
				</button>
				<span>{category}</span>
			</div>
		</td>
		<td className="flex flex-col">
			<input className="w-full p-2" type="text" placeholder="Price" value={price} disabled={!isEditing} onChange={handleInputPrice}/>
			<span className="p-2">{currentPrice!==price && currentPrice}</span>
		</td>
		<td>
			<input className="size-full p-2" type="number" placeholder="Discount" value={discount} disabled={!isEditing} onChange={handleInputDiscount}/>
		</td>
		<td>
			<input className="size-full p-2" type="number" placeholder="Quantity" value={maxQuantity} disabled={!isEditing} onChange={handleInputMaxQuantity}/>
		</td>
		<td className='flex justify-center items-center gap-2'>
			{
				isEditing ?
				<>
				<button onClick={handleEditProduct}>Confirm</button>
				<button onClick={handleCloseEditField}>Cancel</button>
				</>
				: isDeleting ?
				<>
				<button onClick={handleDeleteProduct}>Confirm</button>
				<button onClick={handleCloseDeleteField}>Cancel</button>
				</>
				:
				<>
				<EditButton onClick={handleOpenEditField}/>
				<DeleteButton type="secondary" onClick={handleOpenDeleteField}/>
				</>
			}
		</td>
	</tr>
  )
}
AdminProductLayout.propTypes ={
	sale: PropTypes.string,
	data: PropTypes.object,
	status: PropTypes.string,
	img: PropTypes.string,
}
export default AdminProductLayout
