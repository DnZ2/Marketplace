import PropTypes from 'prop-types';
import { useState } from 'react';
import { convertDate } from '../../../../shared/utils/convertDate';
import Arrow from "../../../../assets/fa-angle-down.svg?react"
const UserOrder = ({order}) => {
	UserOrder.propTypes ={
		order: PropTypes.object,
	}
	const createdAt = convertDate(order.createdAt)
	const [isOpen, setIsOpen] = useState(false)
	const handleToggleOrderCard = ()=>{
			setIsOpen(!isOpen)
	}
  return (
	<div className={`cursor-pointer relative ${order.isReturned ? "bg-red-300" : "bg-gray-200"}`} onClick={handleToggleOrderCard} >
		<div className='p-4 flex justify-between items-center'>
			<span>{createdAt}</span>
				{order.isReturned ?
				<span className='flex items-center gap-2'>Returned <Arrow  className={`stroke-black fill-black ${isOpen ? "rotate-180 transition-all" : "transition-all"}`} /></span>
				: <span><Arrow  className={`stroke-black fill-black ${isOpen ? "rotate-180 transition-all" : "transition-all"}`} /></span>
				}
		</div>
		{
			!isOpen ? null :
			<div className='px-4'>
				<p className='pb-2'>Payment: ${order.paymentAmount}</p>
				{order.products.map((item)=>
					<div key={item._id} className='grid grid-cols-[15%_10%_10%_10%] px-4 pb-2'>
						<p>{item.title}</p>
						<p>{item.quantity} pcs.</p>
						<p>${item.price}</p>
						<p>${item.totalPrice}</p>
					</div>
				)}
			</div>
		}
	</div>
  )
}

export default UserOrder