import { useLazyGetProductsQuery } from "../../../../../shared/redux/query/productsApi";
import { useState, useEffect, useRef } from "react";
import useDebounce from "../../../../../shared/hooks/useDebounce";
import { useNavigate } from "react-router-dom";
const useSearchDebounce = () => {
	const [value, setValue] = useState("");
	const [requiredProducts, setRequiredProducts] = useState([]);
	const searchDebounceRef = useRef(null);
	const [trigger] = useLazyGetProductsQuery();
	const navigate = useNavigate();
	const [isOpen, setIsOpen] = useState(false);
	const [isInputOpen, setInputOpen] = useState(false);
	useEffect(() => {
		isOpen && window.addEventListener("mousedown", handleCloseList);
		return () => window.removeEventListener("mousedown", handleCloseList);
	}, [isOpen]);
	useEffect(() => {
		isInputOpen && searchDebounceRef.current.children[1].focus();
		isInputOpen && window.addEventListener("mousedown", handleCloseInput);
		return () => window.removeEventListener("mousedown", handleCloseInput);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isInputOpen, value]);
	function handleCloseList({ target }) {
		if (!searchDebounceRef?.current?.contains(target)) {
			setIsOpen(false);
		}
	}
	function handleCloseInput({ target }) {
		if (!searchDebounceRef?.current?.contains(target)) {
			if (!value) {
				setInputOpen(false);
				setIsOpen(false);
			}
		}
	}
	const handleOpenInput = () => {
		setInputOpen(true);
		isInputOpen && searchDebounceRef.current.children[1].focus();
	};
	const onFocus = () => {
		setInputOpen(true);
		setIsOpen(true);
	};
	const onKeyDown = (e) => {
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
	const onControls = (e) => {
		const currentTarget = e.currentTarget.children[2];
		if (currentTarget && [...currentTarget.children].includes(e.target)) {
			let id = e.target.id;
			switch (e.code) {
				case "ArrowUp":
					e.preventDefault();
					if (id === "0") id = currentTarget.children.length - 1;
					else id--;
					currentTarget.children[id].focus();
					break;
				case "ArrowDown":
					e.preventDefault();
					if (id === `${currentTarget.children.length - 1}`) id = 0;
					else id++;
					currentTarget.children[id].focus();
					break;
			}
		}
	};
	const debounceSearch = useDebounce(async (value) => {
		const { products } = await trigger(
			{
				searchParam: value,
				limitParam: 5,
				sortParam: "discount",
				sortMethod: -1,
			},
			true
		).unwrap();
		setRequiredProducts(products);
	}, 700);
	const onChange = ({ target }) => {
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
