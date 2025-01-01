import PropTypes from "prop-types"
import { useNumberInput } from "../../../../features/NumberInput/useNumberInput"
import { NumberInputWrapper,NumberInput,NumberInputControlls } from "../../../../shared/UI/NumberInput"
import { forwardRef } from "react"

const AdminFormNumberInput = forwardRef(function AdminFormNumberInput({initial, maxValue, ...props}, ref) {
    const {handleChangeValue, handleDecreaseValue, handleIncreaseValue, value} = useNumberInput(initial, maxValue)
    return (
        <NumberInputWrapper className="w-full">
            <NumberInput ref={ref} {...props} className="p-3 w-full" maxWidthInput={240} value={value} onChange={handleChangeValue}/>
            <NumberInputControlls increase={handleIncreaseValue} decrease={handleDecreaseValue}/>
        </NumberInputWrapper>
    )
})
AdminFormNumberInput.propTypes={
    initial: PropTypes.number,
    maxValue: PropTypes.number,
}
export default AdminFormNumberInput