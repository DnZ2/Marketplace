import { useState, useRef, useEffect } from "react";

const useAddCategory = () => {
    const [isAddCategoryOpen, setOpen] = useState(false);
    const newCategoryRef = useRef(null);
    const handleToggleInput = () => {
        setOpen(!isAddCategoryOpen);
    };
    useEffect(() => {
        isAddCategoryOpen && newCategoryRef.current.focus();
    }, [isAddCategoryOpen]);
    return {
        newCategoryRef,
        isAddCategoryOpen,
        handleToggleInput,
    };
};

export default useAddCategory;
