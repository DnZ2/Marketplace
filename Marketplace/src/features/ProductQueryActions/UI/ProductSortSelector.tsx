import { variants, Variant } from "features/ProductQueryActions/sortVariants"
import { memo } from "react"
import useEvent from "react-use-event-hook"
import { Props } from "shared/UI/Input/Input"
import { useSelect, Select, SelectTrigger, SelectValue, SelectOptions, SelectOption } from "shared/UI/Select"
import useQueryParams from "../useQueryParams"
import Checked from "assets/checked-svgrepo-com.svg?react"
import Arrow from "assets/fa-angle-down.svg?react"

const ProductSortSelector = (props: Props) => {
    const {className,...otherProps} = props
    const {handleSortSelect} = useQueryParams()
    const {handlePickOption,handleToggleSelect,handleFocusSelect,isActive,selectedOption,triggerRef, searchRef} = useSelect("Minimal price")

    const onSelect = useEvent(({value, sortBy, sortMethod}: Variant)=>{
        handleSortSelect(sortBy, sortMethod)
        handlePickOption(value)
    })
    return (
        <Select ref={triggerRef} className="bg-white w-[220px] rounded-md">
            <SelectTrigger onMouseDown={handleToggleSelect}>
                <SelectValue ref={searchRef} className={className} {...otherProps} value={selectedOption} readOnly onFocus={handleFocusSelect}/>
                <Arrow className={`absolute cursor-pointer right-2 top-1/2 -translate-y-1/2 fill-black stroke-black hover:bg-gray-200 size-6 p-[5px] rounded-full ${isActive ? "rotate-180 transition-all" : "transition-all"}`}/>
            </SelectTrigger>
            <SelectOptions isActive={isActive} className="bg-white flex flex-col divide-y divide-gray-300 divide-solid">
                {variants.map(item=>
                    <SelectOption
                        className="hover:bg-gray-100 p-2"
                        key={item.value}
                        onClick={()=>onSelect(item)}
		            >
                        {item.value}
                        {item.value===selectedOption && <Checked />}
                    </SelectOption>
		    )}
            </SelectOptions>
        </Select>
    )
}

export default memo(ProductSortSelector)
