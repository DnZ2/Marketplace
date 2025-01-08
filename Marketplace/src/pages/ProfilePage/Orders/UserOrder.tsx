import { useState } from 'react';
import Arrow from "assets/fa-angle-down.svg?react"
import AddReviewButton from 'features/ReviewActions/AddReviewButton';
import { Order } from 'shared/redux/query/endpoints';
import useToggle from 'shared/hooks/useToggle';

interface Props{
    order: Order
}

const UserOrder = (props: Props) => {
    const {order} = props
    const {isActive: isOpen, toggle} = useToggle(false)
    return (
        <div className={`relative divide-y-2 divide-black ${order.isReturned ? "bg-red-300" : "bg-gray-200"}`} >
            <div className='cursor-pointer p-4 flex justify-between items-center' onClick={toggle}>
                <span>{(order.createdAt.date)}</span>
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
                          <div key={item.title} className='grid grid-cols-[15%_10%_10%_10%_1fr] px-4 pb-2'>
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

export default UserOrder