import { useEffect, useState } from "react";
import useEvent from "react-use-event-hook"

const useToggle = (initial: any) => {

    const [ isActive, setActive ] = useState<boolean>(initial);

    const set = useEvent((value: boolean) => {
        setActive(value);
    });

    const on = useEvent(() => {
        setActive(true);
    });

    const off = useEvent(() => {
        setActive(false);
    });

    const toggle = useEvent(() => {
        setActive((prev) => !prev);
    });

    useEffect(() => {
        setActive(initial);
    }, [ initial ]);

    return {
        isActive,
        set,
        on,
        off,
        toggle
    };
}

export default useToggle
