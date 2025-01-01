import {Select, SelectOption, SelectOptions, SelectTrigger, useSelect} from '../../shared/UI/Select';
import { variants } from './sortVariants';
import Checked from "../../assets/checked-svgrepo-com.svg?react"
import Arrow from "../../assets/fa-angle-down.svg?react"
import { FC } from 'react';
import useQueryParams from 'features/ProductQueryActions/useQueryParams';

interface Props {
	id: string
}

const SortSelector: FC<Props> = ({id}) => {
    const {handleSortSelect} = useQueryParams()
    const {handlePickOption,handleToggleSelect,handleFocusSelect,isActive,selectedOption,triggerRef} = useSelect("Minimal price", handleSortSelect)

    return (
        <Select ref={triggerRef} className=" bg-white w-[220px] rounded-md">
            <SelectTrigger  onMouseDown={handleToggleSelect} >
                <input className='p-2 rounded-md cursor-pointer' id={id} value={selectedOption} readOnly onFocus={handleFocusSelect}/>
                <Arrow className={`absolute cursor-pointer right-2 top-1/2 -translate-y-1/2 fill-black stroke-black hover:bg-gray-200 size-6 p-[5px] rounded-full ${isActive ? "rotate-180 transition-all" : "transition-all"}`}/>
            </SelectTrigger>
            {isActive &&
            <SelectOptions className="bg-white flex flex-col divide-y divide-gray-300 divide-solid">
                {variants.map(item=>
                    <SelectOption
                        className="hover:bg-gray-100 p-2"
                        key={item.value}
                        onClick={()=>{handlePickOption(item.value, item.sortBy, item.sortMethod)}}
		            >
                        {item.value}
                        {item.value===selectedOption && <Checked />}
                    </SelectOption>
		    )}
            </SelectOptions>}
        </Select>
    )
}

export default SortSelector
