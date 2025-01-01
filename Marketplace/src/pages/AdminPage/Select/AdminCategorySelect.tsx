import { Select,SelectOption,SelectOptions,SelectSearch,SelectTrigger,useSelect } from "../../../shared/UI/Select";
import Arrow from "../../../assets/fa-angle-down.svg?react"
import Cross from "../../../assets/cross-svgrepo-com.svg?react"
import PropTypes from "prop-types"
import AddCategoryButton from "./AddCategoryButton";
import useAddCategory from "./useAddCategory";
import { forwardRef, useEffect } from "react";

const AdminCategorySelect = forwardRef(function AdminCategorySelect({categories, saved="", disabled, className}, ref) {
    const {handlePickOption,handleToggleSelect,handleFocusSelect,handleChangeValue,handleResetValue,isOpen,selectedOption,triggerRef,autocompleteRef} = useSelect(saved, categories)
    const {newCategoryRef, isAddCategoryOpen, handleToggleInput} = useAddCategory()
    const regexp = new RegExp(selectedOption.trim().toLowerCase(), "gm");
    const setRef = (input)=>{
        if(ref) ref.current=input;
        autocompleteRef.current=input
    }
    useEffect(()=>{
        disabled && saved!==selectedOption && handlePickOption(saved)
    },[disabled])
    return (
        <Select ref={triggerRef} className="w-full">
            <SelectTrigger>
                <SelectSearch ref={setRef} className={`disabled:bg-inherit bg-white ${className}`} disabled={disabled} id="category" value={selectedOption} onChange={handleChangeValue} onFocus={handleFocusSelect}/>
                {selectedOption && !disabled &&
                <Cross onClick={()=>{
			    handleResetValue()
                }} className={`absolute cursor-pointer right-9 top-1/2 -translate-y-1/2 fill-black stroke-black size-2`}/>}
                {!disabled && <Arrow onClick={handleToggleSelect} className={`absolute cursor-pointer right-2 top-1/2 -translate-y-1/2 fill-black stroke-black hover:bg-gray-200 size-6 p-[5px] rounded-full ${isOpen ? "rotate-180 transition-all" : "transition-all"}`}/>}
            </SelectTrigger>
            {isOpen &&
            <SelectOptions className="bg-white flex flex-col divide-y divide-gray-300 divide-solid shadow-md rounded-e-md">
                {categories.map(item=>
		        regexp.test(item.toLowerCase()) &&
  <SelectOption
      key={item}
      type="button"
      className="hover:bg-gray-100"
      onClick={()=>{
					        handlePickOption(item)
      }}>
      {item}
  </SelectOption>
		    )}
                <AddCategoryButton isOpen={isAddCategoryOpen} ref={newCategoryRef} onClick={handleToggleInput}/>
            </SelectOptions>}
        </Select>
    )
})
AdminCategorySelect.propTypes={
    categories: PropTypes.array,
    saved: PropTypes.string,
    disabled: PropTypes.bool,
    className: PropTypes.string
}

export default AdminCategorySelect
