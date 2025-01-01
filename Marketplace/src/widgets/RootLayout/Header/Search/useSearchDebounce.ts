import { Product, useLazyGetProductsQuery } from "../../../../shared/redux/query/endpoints/productsApi";
import { useState, useEffect, useRef, ChangeEvent, KeyboardEventHandler } from "react";
import useDebounce from "../../../../shared/hooks/useDebounce";
import { useNavigate } from "react-router-dom";
const useSearchDebounce = () => {
    const [value, setValue] = useState("");
    const [requiredProducts, setRequiredProducts] = useState<Product[]>([]);
    const searchDebounceRef = useRef<HTMLDivElement>(null);
    const [trigger] = useLazyGetProductsQuery();
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    const [isInputOpen, setInputOpen] = useState(false);
    useEffect(() => {
        isOpen && window.addEventListener("mousedown", handleCloseList);
        return () => window.removeEventListener("mousedown", handleCloseList);
    }, [isOpen]);
    useEffect(() => {
        isInputOpen && (searchDebounceRef?.current?.children[1] as HTMLInputElement).focus();
        isInputOpen && window.addEventListener("mousedown", handleCloseInput);
        return () => window.removeEventListener("mousedown", handleCloseInput);
    }, [isInputOpen, value]);
    function handleCloseList(event: globalThis.MouseEvent) {
        const target = event.target as HTMLElement
        if (!searchDebounceRef?.current?.contains(target)) {
            setIsOpen(false);
        }
    }
    function handleCloseInput(event: globalThis.MouseEvent) {
        const target = event.target as HTMLElement
        if (!searchDebounceRef?.current?.contains(target)) {
            if (!value) {
                setInputOpen(false);
                setIsOpen(false);
            }
        }
    }
    const handleOpenInput = () => {
        setInputOpen(true);
        isInputOpen && (searchDebounceRef?.current?.children[1] as HTMLInputElement).focus();
    };
    const onFocus = () => {
        setInputOpen(true);
        setIsOpen(true);
    };
    const onKeyDown = (e: KeyboardEvent) => {
        switch (e.code) {
        case "Enter":
            if (!isInputOpen) setInputOpen(true);
            else {
                setValue("");
                setIsOpen(false);
                navigate("/products?search=" + value);
            }
            break;
        case "Escape":
            if (!value) setInputOpen(false);
            else {
                setValue("");
                setIsOpen(false);
            }
            break;
        }
    };
    const onControls: KeyboardEventHandler<HTMLDivElement> = (e) => {
        const currentTarget = e.currentTarget?.children[2] as HTMLDivElement;
        const target = e.target as Element
        if (currentTarget && [...currentTarget.children].includes(target)) {
            let id = Number(target.id)
            switch (e.code) {
            case "ArrowUp":
                e.preventDefault();
                if (id === 0) id = currentTarget.children.length - 1;
                else id--;
                (currentTarget.children[id] as HTMLAnchorElement).focus();
                break;
            case "ArrowDown":
                e.preventDefault();
                if (id === currentTarget.children.length - 1) id = 0;
                else id++;
                (currentTarget.children[id] as HTMLAnchorElement).focus();
                break;
            }
        }
    };
    const debounceSearch = useDebounce(async (value) => {
        const { products } = await trigger(
            {
                searchParam: value,
                limitParam: "5",
                sortParam: "discount",
                sortMethod: "-1",
            },
            true
        ).unwrap();
        setRequiredProducts(products);
    }, 700);
    const onChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
        setValue(target.value);
        debounceSearch(target.value.trim());
        setIsOpen(true);
    };
    return {
        props: {
            onKeyDown,
            onChange,
            onFocus,
            value,
        },
        requiredProducts,
        searchDebounceRef,
        isOpen,
        isInputOpen,
        handleOpenInput,
        onControls,
    };
};

export default useSearchDebounce;
