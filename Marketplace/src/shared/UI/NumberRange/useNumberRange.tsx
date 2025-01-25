
import { createContext, useContext, useState, FC, ReactNode, useMemo } from 'react'
import useEvent from 'react-use-event-hook';
import { Diapason } from 'shared/redux/query/endpoints';

interface RangeContextProps{ 
    min: number;
    max: number;
    onMinChange: (value: number)=>void
    onMaxChange: (value: number)=>void
    onSubmit: (min: number, max: number)=>void
    diapason: Diapason
    initial: {
        initialMin: number
        initialMax: number
    }
}
interface Props{
    diapason: Diapason
    initialMin: number
    initialMax: number
    onSelect: (min:number, max: number)=>void
    children: ReactNode
}

const RangeContext = createContext<RangeContextProps | null>(null);

export const useRange = () => {
    const context = useContext(RangeContext);
    if (!context) {
        throw new Error("useRange must be used within a RangeProvider");
    }
    return context;
};

export const RangeContextProvider: FC<Props> = (props) => {
    const {children, initialMax, initialMin, diapason, onSelect} = props
    
    const [min, setMin] = useState(initialMin)
    const [max, setMax] = useState(initialMax)
    const onMinChange = useEvent((value: number)=>setMin(value))
    const onMaxChange = useEvent((value: number)=>setMax(value))
    const onSubmit = useEvent((min, max)=>onSelect(min, max))
    const contextValue = useMemo(()=>({min,max,diapason,initial: {initialMax, initialMin}, onMinChange, onMaxChange, onSubmit}), [min,max,onMinChange, onMaxChange, onSubmit, diapason, initialMax, initialMin])
    return (
        <RangeContext.Provider value={contextValue}>{children}</RangeContext.Provider>
    )
}

