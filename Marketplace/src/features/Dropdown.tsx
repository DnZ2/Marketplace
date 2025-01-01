import { ComponentPropsWithoutRef, FC, ReactNode, useState } from "react";

interface Props extends ComponentPropsWithoutRef<"div">{
	children: [ReactNode, ReactNode]
}

const Dropdown: FC<Props> = ({children, className}) => {
    const [isOpen, setIsOpen] = useState(false)
    const [trigger, content] = children
    return (
        <div onMouseEnter={()=>{setIsOpen(true)}} onMouseLeave={()=>setIsOpen(false)} className={`relative ${className}`}>
            {trigger}
            {isOpen &&
            <div className='absolute right-0 top-full'>
                {content}
            </div>}
        </div>
    )
}
export default Dropdown

