import PropTypes from 'prop-types';
import { useState } from 'react';
import { convertDate } from '../../../shared/utils/convertDate';
import Arrow from "../../../assets/fa-angle-down.svg?react"
const UserOrder = ({order}) => {
	UserOrder.propTypes ={
		order: PropTypes.object,
	}
	const createdAt = convertDate(order)
	const [isOpen, setIsOpen] = useState(false)
	const handleToggleOrderCard = ()=>{
			setIsOpen(!isOpen)
	}

  return (
	<div className={`cursor-pointer relative ${order.isReturned ? "bg-red-300" : "bg-gray-200"}`} onClick={handleToggleOrderCard} >
		<div className='p-4 flex justify-between items-center'>
			<span>{createdAt}</span>
			<span>
				{order.isReturned ?
				<span className='flex items-center gap-2'>Returned <Arrow  className={`stroke-black fill-black ${isOpen ? "rotate-180 transition-all" : "transition-all"}`} /></span>
				: <span><Arrow  className={`stroke-black fill-black ${isOpen ? "rotate-180 transition-all" : "transition-all"}`} /></span>
				}
			</span>
		</div>
		{
			!isOpen ? null :
			<div className='p-4'>
				<p>Payment: {order.paymentAmount}</p>
				<p></p>
				<p></p>
				<p></p>
			</div>
		}
	</div>
  )
}

export default UserOrder