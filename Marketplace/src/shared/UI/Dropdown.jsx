import PropTypes from 'prop-types';
import { useState } from "react";
import { Children } from 'react';

const Dropdown = ({children}) => {
	Dropdown.propTypes={
		children: PropTypes.node,
	}

	const [isOpen, setIsOpen] = useState(false)
	const [trigger, content] = Children.toArray(children);
  return (
	<div onMouseEnter={()=>{setIsOpen(true)}} onMouseLeave={()=>setIsOpen(false)} className="relative">
		{trigger}
		{isOpen &&
		<div className='absolute right-0 top-full'>
			{content}
		</div>}
	</div>
  )
}

export default Dropdown

