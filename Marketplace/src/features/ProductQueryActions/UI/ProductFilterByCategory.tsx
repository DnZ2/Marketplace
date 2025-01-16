import {  useGetCategoriesQuery } from "shared/redux/query/endpoints"
import { Select, SelectOptions, SelectValue, SelectTrigger } from "shared/UI/Select"
import { Props as InputProps } from "shared/UI/Input/Input"
import { memo, useMemo } from "react"
import SelectResetButton from "shared/UI/Select/SelectResetButton"
import SelectToggleButton from "shared/UI/Select/SelectToggleButton"

interface Props extends InputProps{
    category: string
    onFilterByCategory: (value: string)=>void
    onResetCategory: ()=>void
}

const ProductFilterByCategory = (props: Props) => {
    const {category, onFilterByCategory,onResetCategory,className, ...otherProps} = props
    const {data, isLoading} = useGetCategoriesQuery()

    const options = useMemo(()=>data?.map(item=>item.value), [data])
    if(isLoading || !data || !options) return <div className="flex w-[220px]"><input disabled className="p-2 rounded-md bg-[#f5f5f5] animate-pulse" /></div>
    
    return (
        <Select initial={category} onSelect={onFilterByCategory} onReset={onResetCategory} className="bg-white w-[220px] rounded-md">
            <SelectTrigger>
                <SelectValue className={className} {...otherProps}/>
                <SelectResetButton className="absolute cursor-pointer right-6 top-1/2 -translate-y-1/2"/>
                <SelectToggleButton className="absolute cursor-pointer right-0 top-1/2 -translate-y-1/2"/>
            </SelectTrigger>
            <SelectOptions filtered options={options} className="bg-white flex flex-col divide-y divide-gray-300 divide-solid"/>
        </Select>
    )
}

export default memo(ProductFilterByCategory)
