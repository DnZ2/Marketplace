import image from "../assets/nophoto.png"
import PropTypes from 'prop-types';
import DeleteButton from "../../../features/Favourite/UI/DeleteButton";
import EditButton from "../../../features/Edit/UI/EditButton";
import { useAdminCardControlls } from "../AdminCardProductHook";
const AdminCardProduct = ({data, img=image, status="Out of stock"}) => {
	AdminCardProduct.propTypes ={
		sale: PropTypes.string,
		data: PropTypes.object,
		status: PropTypes.string,
		img: PropTypes.string,
	}
	const {
		discount,
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
		isDeleting,
		isEditing,
		maxQuantity,
		price,
		title
	} = useAdminCardControlls(data)

  return (
	<div className='rounded-md grid grid-cols-[30%_15%_15%_15%_10%_15%] py-6 pl-7 pr-4 shadow-[0_0_4px_1px_#dddddd] items-center'>
		<div className='flex gap-3 items-center'>
			<img className='w-16 object-contain' src={img} alt="no-photo" />
			<div className='flex flex-col'>
			{	isEditing?
				<input type="text" placeholder="Price" value={title} onChange={handleInputTitle}/>:
				<p>{data.title}</p>
			}
				<p>{data.id}</p>
				<p>{data.category}</p>
			</div>
		</div>
		{ isEditing?
		<>
		<input type="number" placeholder="Price" value={price} onChange={handleInputPrice}/>
		<input type="number" placeholder="Discount"value={discount} onChange={handleInputDiscount}/>
		<input type="number" placeholder="Quantity"value={maxQuantity} onChange={handleInputMaxQuantity}/>
		</>
			:
		<>
		<p>{data.price}</p>
		<p>{data.discount}</p>
		<p>{data.maxQuantity}</p>
		</>
		}

		<p>{status}</p>
		<div className='flex justify-end items-center gap-2'>
			{
				isEditing ?
				<>
				<button onClick={handleEditProduct}>Confirm</button>
				<button onClick={handleCloseEditField}>Cancel</button>
				</>
				:
				isDeleting ?
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

		</div>
	</div>
  )
}

export default AdminCardProduct
