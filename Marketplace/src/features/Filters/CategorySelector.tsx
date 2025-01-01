import {Select,SelectOption,SelectOptions,SelectSearch,SelectTrigger, useSelect} from "../../shared/UI/Select"
import Arrow from "../../assets/fa-angle-down.svg?react"
import Cross from "../../assets/cross-svgrepo-com.svg?react"
import { useEffect } from 'react';

const CategorySelector = ({filter, resetFilter, categories, saved="", id, className}) => {
    const {handlePickOption,handleToggleSelect,handleFocusSelect,handleChangeValue,handleResetValue,isActive,selectedOption,triggerRef,autocompleteRef} = useSelect(saved, filter)
    const regexp = new RegExp(selectedOption.trim().toLowerCase(), "gm");
    useEffect(()=>{
        if(!isActive){
            if(categories.includes(selectedOption)){
                handlePickOption(selectedOption)
                filter(selectedOption)
            } else{
                handlePickOption(saved)
            }
        }
    }, [isActive])
    return (
        <Select ref={triggerRef} className="bg-white w-[220px] rounded-md">
            <SelectTrigger>
                <SelectSearch className={className} id={id} ref={autocompleteRef} value={selectedOption} onChange={handleChangeValue} onFocus={handleFocusSelect}/>
                {selectedOption &&
                <Cross onClick={()=>{
			    handleResetValue()
			    resetFilter()
                }} className={`absolute cursor-pointer right-9 top-1/2 -translate-y-1/2 fill-black stroke-black size-2`}/>}
                <Arrow onClick={handleToggleSelect} className={`absolute cursor-pointer right-2 top-1/2 -translate-y-1/2 fill-black stroke-black hover:bg-gray-200 size-6 p-[5px] rounded-full ${isActive ? "rotate-180 transition-all" : "transition-all"}`}/>
            </SelectTrigger>
            {isActive &&
            <SelectOptions className="bg-white flex flex-col divide-y divide-gray-300 divide-solid">
                {categories.map(item=> regexp.test(item.toLowerCase()) &&
                    <SelectOption
                        key={item}
                        className="hover:bg-gray-100 p-2"
                        onClick={()=>{
                            handlePickOption(item)
                            filter(item);
                        }}>
                        {item}
                    </SelectOption>
		        )}
            </SelectOptions>}
        </Select>
    )
}

export default CategorySelector
