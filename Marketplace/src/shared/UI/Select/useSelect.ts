import { ChangeEventHandler, useEffect, useRef, useState } from "react";
import useEvent from "react-use-event-hook";
import useToggle from "shared/hooks/useToggle";

const useSelect = (initial: string, onSelect: (...args: any[])=>void) => {
    const {isActive, on, off, toggle} = useToggle(false);
    const [selectedOption, setSelectedOption] = useState(initial);
    const triggerRef = useRef<HTMLDivElement>(null);
    const autocompleteRef = useRef<HTMLInputElement>(null);
    useEffect(() => {
        isActive && window.addEventListener("mousedown", handleCloseSelect);
        return () => window.removeEventListener("mousedown", handleCloseSelect);
    }, [isActive]);

    function handleCloseSelect(event: globalThis.MouseEvent) {
        const target = event.target as HTMLElement
        if (!triggerRef?.current?.contains(target)) {
            off()
        }
    }

    const handleToggleSelect = () => toggle()
    const handleFocusSelect = () => on()
    const handleChangeValue: ChangeEventHandler<HTMLInputElement> = useEvent(({ target }) => setSelectedOption(target.value))
    const handlePickOption = useEvent((value: string, ...args: any[]) => {
        setSelectedOption(value);
        onSelect(...args)
        off()
    })
    const handleResetValue = useEvent(() => {
        setSelectedOption("");
        on()
        autocompleteRef.current?.focus();
    })

    return {
        handleToggleSelect,
        handlePickOption,
        handleChangeValue,
        handleFocusSelect,
        handleResetValue,
        selectedOption,
        isActive,
        triggerRef,
        autocompleteRef,
    };
};

export default useSelect;
