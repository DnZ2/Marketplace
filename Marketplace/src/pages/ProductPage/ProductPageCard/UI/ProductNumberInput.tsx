import PropTypes from "prop-types"
import { useNumberInput } from "../../../../features/NumberInput/useNumberInput"
import { forwardRef } from "react"
import {DecreaseButton,IncreaseButton,NumberInput,NumberInputWrapper} from "../../../../shared/UI/NumberInput"

const ProductNumberInput = forwardRef(function ProductNumberInput({data}, ref){
    const {handleChangeValue, handleDecreaseValue, handleIncreaseValue, value} = useNumberInput(1, data.maxQuantity)
    return (
        <NumberInputWrapper variant="secondary">
            <DecreaseButton decrease={handleDecreaseValue} />
            <NumberInput className="text-xl text-center h-full border-y border-x-0 border-[#7D8184] border-solid" ref={ref} value={value} onChange={handleChangeValue}/>
            <IncreaseButton increase={handleIncreaseValue} />
        </NumberInputWrapper>
    )
})
ProductNumberInput.propTypes = {
    data: PropTypes.object
}
export default ProductNumberInput
