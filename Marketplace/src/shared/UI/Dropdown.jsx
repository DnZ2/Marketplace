import PropTypes from 'prop-types';
import { useState } from "react";
import { Children } from 'react';

const Dropdown = ({children}) => {
	Dropdown.propTypes={
		children: PropTypes.node,
	}

	const [isOpen, setIsOpen] = useState(false)
	const [titleComponent, hiddenComponent] = Children.toArray(children);
  return (
	<div onMouseEnter={()=>{setIsOpen(true)}} onMouseLeave={()=>setIsOpen(false)} className="relative">
		{titleComponent}
		{isOpen &&
		<div className='absolute right-0 top-full w-fit'>
			{hiddenComponent}
		</div>}
	</div>
  )
}

export default Dropdown

