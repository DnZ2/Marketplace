import DeliveryCar from "../../../assets/icon-delivery.svg?react"
import DeliveryArrowUp from "../../../assets/arrow-delivery-up.svg?react"
import DeliveryArrowDown from "../../../assets/arrow-delivery-down.svg?react"
const DeliveryLayout = () => {
  return (
	<div className="flex flex-col gap-4 border-[1px] border-[#7D8184] rounded-md py-6">
		<div className="flex gap-4 items-center pl-4">
			<DeliveryCar />
			<div>
				<h1 className="text-base font-medium mb-2">Free Delivery</h1>
				<p className="underline font-medium text-xs">Enter your postal code for Delivery Availability</p>
			</div>
		</div>
		<div>
		<div className="h-px bg-[#7D8184]"></div>
		</div>
		<div className="flex gap-4 items-center pl-4">
			<div className="w-10 h-10 flex flex-col justify-center items-center">
				<DeliveryArrowUp />
				<DeliveryArrowDown />
			</div>
			<div>
				<h1 className="text-base font-medium mb-2">Return Delivery</h1>
				<p className="font-medium text-xs">Free 30 Days Delivery Returns. <a href="/" className="underline">Details</a></p>
			</div>
		</div>
	</div>
  )
}

export default DeliveryLayout
