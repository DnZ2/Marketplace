import nophoto from "../../../assets/nophoto.png"
import DeleteButton from "../../../features/Favourite/UI/DeleteButton";
import { useDispatch } from "react-redux";
import { removeProductFromCart } from "../../../shared/redux/slices/cartSlice";
import PropTypes from 'prop-types';
import CardsWrapper from "../../../shared/UI/CardsWrapper";
const CartDropdownProductLayout = ({img=nophoto, data}) => {
	CartDropdownProductLayout.propTypes ={
		data: PropTypes.object,
		img: PropTypes.string,
	}
	const dispatch = useDispatch()
  return (
	<CardsWrapper variant="mini" size="sm" className="gap-x-2">
		<img src={img} alt="" />
		<div className="flex gap-2 items-center">
			<span>{data.title}</span>
			<span className="text-xs text-gray-400">{data.quantity} pcs.</span>
		</div>
		<span className="text-lg font-bold">${data.subtotal}</span>
		<DeleteButton onClick={()=>{dispatch(removeProductFromCart(data))}} type="secondary"/>
	</CardsWrapper>
  )
}

export default CartDropdownProductLayout
