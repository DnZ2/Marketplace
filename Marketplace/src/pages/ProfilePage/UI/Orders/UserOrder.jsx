import PropTypes from 'prop-types';
import { useState } from 'react';
import { convertDate } from '../../../../shared/utils/convertDate';
import Arrow from "../../../../assets/fa-angle-down.svg?react"
import AddReviewButton from '../../../../features/ReviewActions/AddReviewButton';
const UserOrder = ({order}) => {
	const [isOpen, setIsOpen] = useState(false)
	const handleToggleOrderCard = ()=>{
		setIsOpen(!isOpen)
	}
	return (
	<div className={`relative divide-y-2 divide-black ${order.isReturned ? "bg-red-300" : "bg-gray-200"}`} >
		<div className='cursor-pointer p-4 flex justify-between items-center' onClick={handleToggleOrderCard}>
			<span>{convertDate(order.createdAt)}</span>
			{order.isReturned ?
				<span className='flex items-center gap-2'>Returned <Arrow  className={`stroke-black fill-black ${isOpen ? "rotate-180 transition-all" : "transition-all"}`} /></span>
				: <span><Arrow  className={`stroke-black fill-black ${isOpen ? "rotate-180 transition-all" : "transition-all"}`} /></span>
			}
		</div>
		{
			isOpen &&
			<div className='px-4'>
				<p className='pb-2'>Payment: ${order.paymentAmount}</p>
				{order.products.map((item)=>
					<div key={item._id} className='grid grid-cols-[15%_10%_10%_10%_1fr] px-4 pb-2'>
						<p>{item.title}</p>
						<p>{item.quantity} pcs.</p>
						<p>${item.price}</p>
						<p>${item.totalPrice}</p>
						{!order.isReturned && <AddReviewButton productId={item.productId}>Rate our product</AddReviewButton>}
					</div>
				)}
			</div>
		}
	</div>
  )
}
UserOrder.propTypes ={
	order: PropTypes.object,
}

export default UserOrder