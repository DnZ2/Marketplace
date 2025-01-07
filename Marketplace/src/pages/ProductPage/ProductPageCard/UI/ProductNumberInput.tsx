import { useNumberInput } from "../../../../features/NumberInput/useNumberInput"
import { forwardRef, ForwardRefRenderFunction, memo } from "react"
import {DecreaseButton,IncreaseButton,NumberInput,NumberInputWrapper} from "../../../../shared/UI/NumberInput"



const ProductNumberInput: ForwardRefRenderFunction<HTMLInputElement> = (props, ref)=>{
    const {data, ...otherProps} = props
    const {handleChangeValue, handleDecreaseValue, handleIncreaseValue, value} = useNumberInput(1, data.maxQuantity)
    return (
        <NumberInputWrapper variant="secondary">
            <DecreaseButton onClick={handleDecreaseValue} />
            <NumberInput className="text-xl text-center h-full border-y border-x-0 border-[#7D8184] border-solid" ref={ref} value={value} onChange={handleChangeValue} {...otherProps}/>
            <IncreaseButton onClick={handleIncreaseValue} />
        </NumberInputWrapper>
    )
}

export default memo(forwardRef(ProductNumberInput))
