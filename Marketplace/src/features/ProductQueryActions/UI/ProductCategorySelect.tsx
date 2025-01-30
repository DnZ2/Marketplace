import {  useGetCategoriesQuery } from "shared/redux/query/endpoints"
import { Select, SelectOptions, SelectValue, SelectTrigger } from "shared/UI/Select"
import { Props as InputProps } from "shared/UI/Input/Input"
import { memo, useMemo } from "react"
import SelectResetButton from "shared/UI/Select/SelectResetButton"
import SelectToggleButton from "shared/UI/Select/SelectToggleButton"

interface Props extends Omit<InputProps, "onSelect">{
    category: string
    onSelect?: (value: string)=>void
    onReset?: ()=>void
    onClose?: (value: string)=>void
}

const ProductCategorySelect = (props: Props) => {
    const {category, onSelect,onReset,onClose, ...otherProps} = props
    const {data, isLoading} = useGetCategoriesQuery()

    const options = useMemo(()=>data?.map(item=>item.value), [data])
    if(isLoading || !options) return <div className="flex w-[220px]"><input disabled className="p-2 rounded-md bg-[#f5f5f5] animate-pulse" /></div>
    
    return (
        <Select initial={category} onSelect={onSelect} onReset={onReset} onClose={onClose} className="bg-white w-[220px] rounded-md">
            <SelectTrigger>
                <SelectValue {...otherProps}/>
                <SelectResetButton className="absolute cursor-pointer right-8 top-1/2 -translate-y-1/2"/>
                <SelectToggleButton className="absolute cursor-pointer right-2 top-1/2 -translate-y-1/2"/>
            </SelectTrigger>
            <SelectOptions filtered options={options} className="bg-white flex flex-col divide-y divide-gray-300 divide-solid"/>
        </Select>
    )
}

export default memo(ProductCategorySelect)
