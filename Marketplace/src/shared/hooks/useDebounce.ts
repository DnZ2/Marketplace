import { useCallback, useRef } from "react";

const useDebounce = (callback: (...args: any[])=>void, delay: number) => {
    const timer = useRef<NodeJS.Timeout | null>(null);
    const debounce = useCallback(
        (...args: any[]) => {
            if (timer.current) {
                clearTimeout(timer.current);
            }
            timer.current = setTimeout(() => {
                callback(...args);
            }, delay);
        },
        [callback, delay]
    );
    return debounce;
};

export default useDebounce;
