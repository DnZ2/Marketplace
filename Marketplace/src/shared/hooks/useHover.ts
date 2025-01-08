import { useMemo, useState } from 'react'
import useEvent from 'react-use-event-hook'

interface Actions{
    onMouseEnter: ()=>void
    onMouseLeave: ()=>void
}

interface ReturnedValue{
    isHover: boolean
    actions: Actions
}

const useHover = (): ReturnedValue => {
    const [isHover, setHover] = useState(false)

    const onMouseEnter = useEvent(()=>setHover(true))
    const onMouseLeave = useEvent(()=>setHover(false))

    return useMemo(()=>({
        isHover, actions: {onMouseEnter, onMouseLeave}
    }), [isHover, onMouseEnter, onMouseLeave])
}

export default useHover
