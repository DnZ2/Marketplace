
import { ChangeEventHandler, createContext, useContext, useMemo, useRef, useState, ReactNode, FC, RefObject, useLayoutEffect, MouseEventHandler } from 'react'
import useEvent from 'react-use-event-hook';
import useToggle from 'shared/hooks/useToggle';


interface SelectContextProps{ 
    isOpen: boolean;
    option: string;
    searchRef: RefObject<HTMLInputElement>
    triggerRef: RefObject<HTMLDivElement>
    onChange: ChangeEventHandler<HTMLInputElement>;
    onToggle: MouseEventHandler<HTMLButtonElement>
    onPickOption: MouseEventHandler<HTMLButtonElement>
    onResetValue: () => void;
    onOpen: () => void;
}
interface Props{
    initial: string
    onSelect?: (value: string)=>void
    onReset?: ()=>void
    onClose?: (value: string)=>void
    children: ReactNode
}

const SelectContext = createContext<SelectContextProps | null>(null);

export const useSelect = () => {
    const context = useContext(SelectContext);
    if (!context) {
        throw new Error("useSelect must be used within a SelectProvider");
    }
    return context;
};

export const SelectContextProvider: FC<Props> = (props) => {
    const {initial, onSelect, onReset, onClose, children} = props
    const [option, setOption] = useState(initial)
    const [stable, setStable] = useState(initial)
    const searchRef = useRef<HTMLInputElement>(null)
    const triggerRef = useRef<HTMLDivElement>(null)
    const {isActive, on, off, toggle} = useToggle(false)
    const onChange = useEvent(({target}) => setOption(target.value))
    const onPickOption = useEvent(({target}) => {
        setOption(target.innerText);
        setStable(target.innerText)
        off()
        onSelect?.(target.innerText)
    })
    const onResetValue = useEvent(() => {
        setOption("");
        setStable("")
        on()
        onReset?.()
        searchRef.current?.focus();
    })
    const onSelectClose = useEvent((e: globalThis.MouseEvent)=>{
        if(!triggerRef?.current?.contains(e.target as Node)){
            off()
            setOption(stable)
            onClose?.(stable)
        }
    })
    useLayoutEffect(()=>{
        isActive && window.addEventListener("mousedown", onSelectClose)
        return ()=> window.removeEventListener("mousedown", onSelectClose)
    },[isActive])
    const onToggle = useEvent((e)=>{
        e.stopPropagation()
        toggle()
    })
    const contextValue = useMemo(()=>({
        isOpen: isActive, onToggle, option, onChange, onOpen: on, onPickOption, onResetValue, searchRef, triggerRef
    }), [isActive, on, onToggle, option, onChange, onResetValue, onResetValue, searchRef, triggerRef])

    return (
        <SelectContext.Provider value={contextValue}>{children}</SelectContext.Provider>
    )
}

