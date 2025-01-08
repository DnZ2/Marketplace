import { ComponentPropsWithoutRef, memo, ReactNode } from "react";
import useHover from "shared/hooks/useHover";

interface Props extends ComponentPropsWithoutRef<"div">{
	children: [ReactNode, ReactNode]
}

const Dropdown = (props: Props) => {
    const {children, className} = props
    const {isHover, actions} = useHover()
    const [trigger, content] = children
    return (
        <div {...actions} className={`relative ${className}`}>
            {trigger}
            {isHover &&
            <div className='absolute right-0 top-full'>
                {content}
            </div>}
        </div>
    )
}
export default memo(Dropdown)

