import { useState, useEffect } from "react";

export const useScrollButton = () => {
    const [savedPosition, setSavedPosition] = useState(0);
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const onScroll = () => setOffset(window.scrollY);
        window.removeEventListener("scroll", onScroll);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    function handleScroll() {
        if (savedPosition > 0) {
            window.scrollTo(0, savedPosition);
            setSavedPosition(0);
        } else {
            setSavedPosition(window.scrollY);
            window.scrollTo(0, 0);
        }
    }
    return {
        offset,
        handleScroll,
        savedPosition,
        setSavedPosition,
    };
};
