import image from "../../../assets/nophoto.png"
import PropTypes from 'prop-types';
import NumberInput from "../../../features/NumberInput/NumberInput";
import { useNumberInputHook } from "../../../features/NumberInput/NumberInputHook";
import DeleteButton from "../../../features/Favourite/UI/DeleteButton";
import { removeProductFromCart, updateQuantity } from "../../../shared/redux/slices/cartSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

function CartProductLayout({src=image, data}) {
	CartProductLayout.propTypes={
		src: PropTypes.string,
		data: PropTypes.object,
	}
	const {handleChangeValue, handleDecreaseValue, handleIncreaseValue, maxWidthInput, value} = useNumberInputHook(data.quantity, data.maxQuantity)
	const dispatch = useDispatch();
	useEffect(() => {
		const {id} = data
		dispatch(updateQuantity({ id, value }));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [value]);
  return (
		<div className="rounded-md grid grid-cols-[1fr_1fr_1fr_1fr_80px] py-6 pl-7 shadow-[0_0_4px_1px_#dddddd] items-center">
			<div className="flex items-center gap-5">
				<img className="h-[40px] object-contain" src={src} alt="img" />
				<h2>{data.title}</h2>
			</div>
			<p>${data.price}</p>
			<NumberInput handleChangeValue={handleChangeValue} handleDecreaseValue={handleDecreaseValue} handleIncreaseValue={handleIncreaseValue} maxWidthInput={maxWidthInput} value={value}/>
			<p>${data.subtotal.toFixed(1)}</p>
			<DeleteButton onClick={()=>dispatch(removeProductFromCart(data))} type="secondary"/>
		</div>
  )
}

export default CartProductLayout
