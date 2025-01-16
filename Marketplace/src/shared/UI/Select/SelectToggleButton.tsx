import { ComponentPropsWithoutRef, memo } from 'react'
import Button from '../Button/Button'
import { useSelect } from './useSelect'
import { ChevronDown } from 'lucide-react'

const SelectToggleButton = ({...props}: ComponentPropsWithoutRef<"button">) => {
    const {isOpen, onToggle} = useSelect()
    return (
        <Button variant="empty" size="empty" onClick={onToggle} {...props}>
            <ChevronDown className={`size-4 hover:bg-gray-200 rounded-full transition-transform ${isOpen && "rotate-180"}`}/>
        </Button>
    )
}

export default memo(SelectToggleButton)
