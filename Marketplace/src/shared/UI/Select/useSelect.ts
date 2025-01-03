import { ChangeEventHandler, useLayoutEffect, useRef, useState } from "react";
import useEvent from "react-use-event-hook";
import useToggle from "shared/hooks/useToggle";

const useSelect = (initial: string) => {
    const {isActive, on, off, toggle} = useToggle(false);
    const [selectedOption, setSelectedOption] = useState(initial);
    const triggerRef = useRef<HTMLDivElement>(null);
    const searchRef = useRef<HTMLInputElement>(null);

    const  handleCloseSelect = (event: globalThis.MouseEvent)=> {
        const target = event.target as HTMLElement
        if (!triggerRef?.current?.contains(target)) {
            off()
        }
    }

    const handleToggleSelect = () => toggle()
    const handleFocusSelect = () => on()
    const handleChangeValue: ChangeEventHandler<HTMLInputElement>  = ({target}) => setSelectedOption(target.value)
    const handlePickOption = (value: string) => {
        setSelectedOption(value);
        off()
    }
    const handleResetValue = useEvent(() => {
        setSelectedOption("");
        on()
        searchRef.current?.focus();
    })
    
    useLayoutEffect(() => {
        isActive && window.addEventListener("mousedown", handleCloseSelect);
        return () => window.removeEventListener("mousedown", handleCloseSelect);
    }, [isActive]);

    return {
        handleToggleSelect,
        handlePickOption,
        handleChangeValue,
        handleFocusSelect,
        handleResetValue,
        selectedOption,
        isActive,
        triggerRef,
        searchRef,
    };
};

export default useSelect;
