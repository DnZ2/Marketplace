import { CategoryItem, useGetCategoriesQuery } from "shared/redux/query/endpoints"
import { Select, SelectOption, SelectOptions, SelectValue, SelectTrigger, useSelect } from "shared/UI/Select"
import useQueryParams from "../useQueryParams"
import Checked from "assets/checked-svgrepo-com.svg?react"
import Cross from "assets/cancel-svgrepo-com.svg?react"
import Arrow from "assets/fa-angle-down.svg?react"
import useEvent from "react-use-event-hook"
import { Props as InputProps } from "shared/UI/Input/Input"
import { memo } from "react"

interface Props extends InputProps{}

const ProductFilterByCategory = memo((props: Props) => {
    const {className, ...otherProps} = props
    const {categoryParam, handleFilterByCategory, handleResetCategoryParam} = useQueryParams()
    const {data, isLoading} = useGetCategoriesQuery()
    const {triggerRef, searchRef, isActive, selectedOption, handleChangeValue, handleFocusSelect, handlePickOption, handleResetValue, handleToggleSelect} = useSelect(categoryParam)

    const onReset = useEvent(()=>{
        handleResetCategoryParam()
        handleResetValue()
    })

    const onSelect = useEvent(({value}: CategoryItem)=>{
        handleFilterByCategory(value)
        handlePickOption(value)
    })

    const isCategoryMatch = (category: CategoryItem): boolean=> new RegExp(selectedOption.toLowerCase()).test(category.value.toLowerCase())
    if(isLoading || !data) return <div className="flex w-[220px]"><input disabled className="p-2 rounded-md bg-[#f5f5f5] animate-pulse" /></div>

    return (
        <Select ref={triggerRef} className="bg-white w-[220px] rounded-md">
            <SelectTrigger>
                <SelectValue ref={searchRef} className={className} {...otherProps} value={selectedOption} onChange={handleChangeValue} onFocus={handleFocusSelect}/>
                {categoryParam &&<Cross className="absolute cursor-pointer right-8 top-1/2 -translate-y-1/2 hover:bg-gray-200 size-7 p-1 rounded-full" onClick={onReset}/>}
                <Arrow onClick={handleToggleSelect} className={`absolute cursor-pointer right-2 top-1/2 -translate-y-1/2 fill-black stroke-black hover:bg-gray-200 size-6 p-[5px] rounded-full ${isActive ? "rotate-180 transition-all" : "transition-all"}`}/>
            </SelectTrigger>
            <SelectOptions isActive={isActive} className="bg-white flex flex-col divide-y divide-gray-300 divide-solid">
                {
                    data.map((category)=> isCategoryMatch(category) &&
                        <SelectOption 
                            key={category.id}
                            className={className}
                            onClick={()=>onSelect(category)}
                        >
                            {category.value}
                            {category.value===selectedOption && <Checked />}
                        </SelectOption>
                    )
                }
                {!data.length && <SelectOption className="p-2">No options by this query</SelectOption>}
            </SelectOptions>
        </Select>
    )
})

export default ProductFilterByCategory
