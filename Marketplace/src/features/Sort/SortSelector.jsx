import PropTypes from 'prop-types';
import {Select, SelectOption, SelectOptions, SelectTrigger, useSelect} from '../../shared/UI/Select';
import { variants } from './sortVariants';
import Checked from "../../assets/checked-svgrepo-com.svg?react"
import Arrow from "../../assets/fa-angle-down.svg?react"
const SortSelector = ({sorting, id}) => {
	const {handlePickOption,handleToggleSelect,handleFocusSelect,isOpen,selectedOption,triggerRef} = useSelect("Minimal price")
  return (
	<Select ref={triggerRef} className=" bg-white w-[220px] rounded-md">
		<SelectTrigger  onMouseDown={handleToggleSelect} >
			<input className='p-2 rounded-md cursor-pointer' id={id} value={selectedOption} readOnly onFocus={handleFocusSelect}/>
			<Arrow className={`absolute cursor-pointer right-2 top-1/2 -translate-y-1/2 fill-black stroke-black hover:bg-gray-200 size-6 p-[5px] rounded-full ${isOpen ? "rotate-180 transition-all" : "transition-all"}`}/>
		</SelectTrigger>
		{isOpen &&
		<SelectOptions className="bg-white flex flex-col divide-y divide-gray-300 divide-solid">
			{variants.map(item=>
				<SelectOption
					className="hover:bg-gray-100 p-2"
					key={item.value}
					onClick={()=>{
						handlePickOption(item.value);
						sorting(item.sortBy, item.sortMethod)
					}}
				>
					{item.value}
					{item.value===selectedOption && <Checked />}
				</SelectOption>
			)}
		</SelectOptions>}
	</Select>
  )
}
SortSelector.propTypes={
	sorting: PropTypes.func,
	id: PropTypes.string,
}
export default SortSelector
