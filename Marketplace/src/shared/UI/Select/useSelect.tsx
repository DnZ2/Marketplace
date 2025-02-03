
import { ChangeEventHandler, createContext, useContext, useMemo, useRef, useState, ReactNode, FC, RefObject, useLayoutEffect, MouseEventHandler } from 'react'
import useEvent from 'react-use-event-hook';
import useToggle from 'shared/hooks/useToggle';


interface SelectContextProps{ 
    isOpen: boolean;
    option: string;
    options: string[]
    searchRef: RefObject<HTMLInputElement>
    triggerRef: RefObject<HTMLDivElement>
    onChange: ChangeEventHandler<HTMLInputElement>;
    onToggle: MouseEventHandler<HTMLButtonElement>
    onPickOption: MouseEventHandler<HTMLButtonElement>
    onResetValue: () => void;
    onOpen: () => void;
    onBlur: () => void
}
interface Props{
    initial: string
    options: string[]
    onSelect?: (value: string)=>void
    onReset?: ()=>void
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
    const {initial, options, onSelect, onReset, children} = props
    const [option, setOption] = useState(initial)
    const [prevOption, setPrevOption] = useState(initial)
    const searchRef = useRef<HTMLInputElement>(null)
    const triggerRef = useRef<HTMLDivElement>(null)
    const {isActive, on, off, toggle} = useToggle(false)
    const onChange = useEvent(({target}) => setOption(target.value))
    const onBlur = useEvent(()=>{
        if(options.includes(option)){
            onSelect?.(option)
            setPrevOption(option)
        }
        else if(!option){
            onSelect?.("")
            setPrevOption("")
        }
        else{
            onSelect?.(prevOption)
            setOption(prevOption)
        }
    })
    const onPickOption = useEvent(({target}) => {
        setOption(target.innerText);
        setPrevOption(target.innerText)
        off()
        onSelect?.(target.innerText)
    })
    const onResetValue = useEvent(() => {
        setOption("");
        setPrevOption("")
        on()
        onReset?.()
        searchRef.current?.focus();
    })
    const onSelectClose = useEvent((e: globalThis.MouseEvent)=>{
        if(!triggerRef?.current?.contains(e.target as Node)){
            off()
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
        isOpen: isActive, option, options, onChange, onBlur, onToggle, onOpen: on, onPickOption, onResetValue, searchRef, triggerRef
    }), [isActive, on, onToggle, option, options, onChange, onBlur, onResetValue, onResetValue, searchRef, triggerRef])

    return (
        <SelectContext.Provider value={contextValue}>{children}</SelectContext.Provider>
    )
}

