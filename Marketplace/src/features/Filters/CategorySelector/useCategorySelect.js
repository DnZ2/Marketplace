import { useEffect, useState, useRef } from "react";

const useCategorySelect = (options, pickOption, queryParam) => {
	const [isOpen, setIsOpen] = useState(false);
	const [searchOption, setSearchOption] = useState(
		queryParam || "All Products"
	);
	const triggerCategorySelectRef = useRef(null);
	let regexp = new RegExp(searchOption.trim().toLowerCase(), "gm");

	const filteredOptions = options?.filter((item) => {
		if (searchOption === "All Products") {
			return item;
		} else {
			if (regexp.test(item.toLowerCase())) {
				return item;
			}
			return null;
		}
	});
	filteredOptions?.unshift("All Products");

	const handelCloseSelect = ({ target }) => {
		if (!triggerCategorySelectRef?.current?.contains(target)) {
			setIsOpen(false);
		}
	};
	useEffect(() => {
		isOpen
			? document.addEventListener("mouseup", handelCloseSelect)
			: document.removeEventListener("mouseup", handelCloseSelect);
	}, [isOpen]);
	const handleOpenSelect = () => {
		setIsOpen(true);
	};
	const handleToggleSelect = () => {
		setIsOpen(!isOpen);
	};
	const handleSearchOption = (e) => {
		setSearchOption(e.target.value);
		setIsOpen(true);
	};
	const handlePickOption = ({ target }) => {
		if (queryParam === target.innerText) {
			setIsOpen(false);
		} else {
			pickOption(target.innerText, "All Products");
			setSearchOption(target.innerText);
			setIsOpen(false);
		}
	};
	const clearSelectInput = () => {
		setSearchOption("");
		setIsOpen(true);
		triggerCategorySelectRef?.current?.children[0].focus();
	};

	return {
		handleOpenSelect,
		handleToggleSelect,
		handleSearchOption,
		handlePickOption,
		clearSelectInput,
		searchOption,
		isOpen,
		filteredOptions,
		triggerCategorySelectRef,
		queryParam,
	};
};

export default useCategorySelect;
