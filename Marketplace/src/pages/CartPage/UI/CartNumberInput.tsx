import { useAppDispatch } from "../../../shared/redux/store"
import { useEffect } from "react"
import { CartProduct, updateQuantity } from "../../../shared/redux/slices/cartSlice"
import { useNumberInput } from "../../../features/NumberInput/useNumberInput"
import { NumberInputWrapper,NumberInput,NumberInputControlls } from "../../../shared/UI/NumberInput"

interface Props{
    data: CartProduct
}

const CartNumberInput = ({data}: Props) => {
    const {handleChangeValue, handleDecreaseValue, handleIncreaseValue, value} = useNumberInput(data.quantity, data.maxQuantity)
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(updateQuantity({ id: data.id, value }));
    }, [value]);
    const maxWidthInput = String(value).length > 2 ? String(value).length * 10 + 40 : 20 + 40;
    return (
        <NumberInputWrapper variant={"default"}>
            <NumberInput className="p-2 pr-8 w-full" maxWidthInput={maxWidthInput} value={value} onChange={handleChangeValue}/>
            <NumberInputControlls increase={handleIncreaseValue} decrease={handleDecreaseValue}/>
        </NumberInputWrapper>
    )
}

export default CartNumberInput
