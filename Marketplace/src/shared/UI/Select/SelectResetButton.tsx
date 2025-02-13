import { X } from 'lucide-react'
import Button from '../Button/Button'
import { useSelect } from './useSelect'
import { ComponentPropsWithoutRef, memo } from 'react'

const SelectResetButton = ({...props}: ComponentPropsWithoutRef<"button">) => {
    const {option, onResetValue} = useSelect()
    if(!option) return null
    return (
        <Button variant="empty" size="empty" onClick={onResetValue} {...props}>
            <X className='size-4 hover:bg-gray-200 rounded-full' />
        </Button>
    )
}

export default memo(SelectResetButton)