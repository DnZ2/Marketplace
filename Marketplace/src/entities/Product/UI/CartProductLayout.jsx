import image from "../../../assets/nophoto.png"
import PropTypes from 'prop-types';
import NumberInput from "../../../shared/UI/NumberInput";
import { useNumberInputHook } from "../../../features/NumberInput/NumberInputHook";
import DeleteButton from "../../../features/Favourite/UI/DeleteButton";
import { removeProductFromCart, updateQuantity } from "../../../shared/redux/slices/cartSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import CardsWrapper from "../../../shared/UI/CardsWrapper";

function CartProductLayout({src=image, data}) {
	CartProductLayout.propTypes={
		src: PropTypes.string,
		data: PropTypes.object,
	}
	const {handleChangeValue, handleDecreaseValue, handleIncreaseValue, maxWidthInput, value} = useNumberInputHook(data.quantity, data.maxQuantity)
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(updateQuantity({ id: data.id, value }));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [value]);
	return (
		<CardsWrapper variant="cart" size="base" styles="shadowRounded">
			<div className="flex items-center gap-5">
				<img className="h-[40px] object-contain" src={src} alt="img" />
				<h2>{data.title}</h2>
			</div>
			<p>${data.price}</p>
			<NumberInput handleChangeValue={handleChangeValue} handleDecreaseValue={handleDecreaseValue} handleIncreaseValue={handleIncreaseValue} maxWidthInput={maxWidthInput} value={value}/>
			<p>${data.subtotal}</p>
			<DeleteButton onClick={()=>dispatch(removeProductFromCart(data))} type="secondary"/>
		</CardsWrapper>
	)
}

export default CartProductLayout
