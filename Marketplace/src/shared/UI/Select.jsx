import PropTypes from 'prop-types';
import Arrow from "../../assets/fa-angle-down.svg?react"
import Checked from "../../assets/checked-svgrepo-com.svg?react"

const Select = ({options}) => {
	Select.propTypes={
		options: PropTypes.object,
	}
	const {
		handleOpenSelect,
		handleToggleSelect,
		handlePickOption,
		selectedOption,
		isOpen,
		variants,
		triggerSortSelectRef,
	} = options
  return (
	<div ref={triggerSortSelectRef} className='relative w-[170px]'>
		<div className='relative flex w-full'>
			<span className=' p-2 rounded w-full bg-white' onClick={handleOpenSelect}>{selectedOption}</span>
			<span onClick={handleToggleSelect} className='p-2 cursor-pointer absolute right-0 top-1/2 -translate-y-1/2 flex items-center' >
				<Arrow  className={`stroke-black fill-black ${isOpen ? "rotate-180 transition-all" : "transition-all"}`} />
			</span>
		</div>

		{isOpen &&
		<div className='absolute top-full left-0 w-full flex flex-col divide-y divide-gray-300 divide-solid bg-gray-200 rounded-b-md z-[1]'>
			{variants.map((item)=>
				<button className='p-2 hover:bg-gray-400 flex items-center justify-between' onClick={handlePickOption} data-sort={`${item.sortBy}`} data-method={`${item.sortMethod}`} key={item.value}>
					{item.value} {item.value===selectedOption && <Checked />}
				</button>
			)}
		</div>}

	</div>
  )
}

export default Select
