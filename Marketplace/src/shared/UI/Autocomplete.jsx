import PropTypes from 'prop-types';
import Arrow from "../../assets/fa-angle-down.svg?react"
import Checked from "../../assets/checked-svgrepo-com.svg?react"

const Autocomplete = ({options}) => {
	Autocomplete.propTypes={
		options: PropTypes.object,
	}
	const {
		queryParam,
		searchOption,
		isOpen,
		triggerCategorySelectRef,
		filteredOptions,
		clearSelectInput,
		handleOpenSelect,
		handlePickOption,
		handleSearchOption,
		handleToggleSelect
	} = options
  return (
	<div ref={triggerCategorySelectRef} className='relative'>
		<input className='relative p-2 rounded' type='text' value={searchOption} onChange={handleSearchOption} onClick={handleOpenSelect} placeholder='Autocomplete'/>
		<span className='absolute right-0 top-1/2 -translate-y-1/2 flex items-center'>
			<span onClick={clearSelectInput} className='cursor-pointer'>
				{searchOption===""? "" : "x"}
			</span>
			<span onClick={handleToggleSelect} className='p-2 cursor-pointer' >
				<Arrow  className={`stroke-black fill-black ${isOpen ? "rotate-180 transition-all" : "transition-all"}`} />
			</span>
		</span>

		{isOpen &&
		<div className='absolute top-full left-0 w-full flex flex-col divide-y divide-gray-300 divide-solid bg-gray-200 rounded-b-md z-[1]'>
			{
			filteredOptions?.map((item)=>
				<button className='p-2 hover:bg-gray-400 flex items-center justify-between' onClick={handlePickOption} key={item}>
					{item} {item===queryParam &&<Checked />}
				</button>
			)
			}
		</div>}
	</div>

  )
}

export default Autocomplete
