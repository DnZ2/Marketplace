import { variants } from "features/ProductQueryActions/sortVariants"
import { memo, useMemo } from "react"
import { Props as InputProps } from "shared/UI/Input/Input"
import { Select, SelectTrigger, SelectValue, SelectOptions } from "shared/UI/Select"
import SelectToggleButton from "shared/UI/Select/SelectToggleButton"

interface Props extends Omit<InputProps, "onSelect">{
    onSelect: (value: string) => void
}

const ProductSortSelect = (props: Props) => {
    const { onSelect, ...otherProps} = props
    const options = useMemo(()=>variants.map(item=>item.value), [variants])
    return (
        <Select initial="Minimal price" onSelect={onSelect} options={options} className="bg-white w-[220px] rounded-md">
            <SelectTrigger>
                <SelectValue readOnly {...otherProps}/>
                <SelectToggleButton className="absolute cursor-pointer right-2 top-1/2 -translate-y-1/2"/>
            </SelectTrigger>
            <SelectOptions className="bg-white flex flex-col divide-y divide-gray-300 divide-solid" />
        </Select>

    )
}

export default memo(ProductSortSelect)
