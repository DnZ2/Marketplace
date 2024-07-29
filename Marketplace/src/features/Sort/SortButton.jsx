import { memo } from "react";
import Arrow from "../../assets/fa-angle-down.svg?react"
import PropTypes from 'prop-types';

const SortButton = memo(function SortButton({sortMethod, onClick, children, id, sortQuery}) {

  return (
	<button onClick={onClick} id={id} className="flex items-center gap-2">
		<span>{children}</span>
		{
		sortQuery===id ?
		<Arrow className={`stroke-black fill-black ${sortMethod==1?"rotate-180 transition-all":"transition-all"}`}/>
		: null
		}
	</button>
  )
})
SortButton.propTypes={
	sortMethod: PropTypes.string,
	onClick: PropTypes.func,
	children: PropTypes.string,
	id: PropTypes.string,
	sortQuery: PropTypes.string,
}


export default SortButton
