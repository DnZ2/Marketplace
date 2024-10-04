import PropTypes from 'prop-types';
import {Select,SelectOption,SelectOptions,SelectSearch,SelectTrigger, useSelect} from "../../../shared/UI/Select"
import Arrow from "../../../assets/fa-angle-down.svg?react"
import Cross from "../../../assets/cross-svgrepo-com.svg?react"

const CategorySelector = ({filter, resetFilter, categories, saved="", id}) => {
	const {handlePickOption,handleToggleSelect,handleFocusSelect,handleChangeValue,handleResetValue,isOpen,selectedOption,triggerRef,autocompleteRef} = useSelect(saved)
	let regexp = new RegExp(selectedOption.trim().toLowerCase(), "gm");
	return (
	<Select ref={triggerRef} className=" bg-white w-[220px] rounded-md">
		<SelectTrigger>
			<SelectSearch id={id} ref={autocompleteRef} value={selectedOption} onChange={handleChangeValue} onFocus={handleFocusSelect}/>
			{selectedOption &&
			<Cross onClick={()=>{
				handleResetValue()
				resetFilter()
			}} className={`absolute cursor-pointer right-9 top-1/2 -translate-y-1/2 fill-black stroke-black size-2`}/>}
			<Arrow onClick={handleToggleSelect} className={`absolute cursor-pointer right-2 top-1/2 -translate-y-1/2 fill-black stroke-black hover:bg-gray-200 size-6 p-[5px] rounded-full ${isOpen ? "rotate-180 transition-all" : "transition-all"}`}/>
		</SelectTrigger>
		{isOpen &&
		<SelectOptions className="bg-white flex flex-col divide-y divide-gray-300 divide-solid">
			{categories.map(item=>
				regexp.test(item.toLowerCase()) &&
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
CategorySelector.propTypes={
	filter: PropTypes.func,
	resetFilter: PropTypes.func,
	categories: PropTypes.array,
	saved: PropTypes.string,
	id: PropTypes.string,
	lastElement: PropTypes.node,
}
export default CategorySelector
