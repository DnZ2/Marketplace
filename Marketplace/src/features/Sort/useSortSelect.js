import { useEffect, useState, useRef } from "react";

const useSortSelect = (pickOption) => {
	const [isOpen, setIsOpen] = useState(false);
	const [selectedOption, setSelectedOption] = useState("Minimal price");
	const variants = [
		{
			value: "Minimal price",
			sortBy: "price",
			sortMethod: 1,
		},
		{
			value: "Maximal price",
			sortBy: "price",
			sortMethod: -1,
		},
		{
			value: "By title, ⭡",
			sortBy: "title",
			sortMethod: 1,
		},
		{
			value: "By title, ⭣",
			sortBy: "title",
			sortMethod: -1,
		},
		{
			value: "By quantity, ⭡",
			sortBy: "quantity",
			sortMethod: 1,
		},
		{
			value: "By quantity, ⭣",
			sortBy: "quantity",
			sortMethod: -1,
		},
	];
	const triggerSortSelectRef = useRef(null);
	const handelCloseSortSelect = ({ target }) => {
		if (!triggerSortSelectRef?.current?.contains(target)) {
			setIsOpen(false);
		}
	};
	useEffect(() => {
		isOpen
			? document.addEventListener("mouseup", handelCloseSortSelect)
			: document.removeEventListener("mouseup", handelCloseSortSelect);
	}, [isOpen]);
	const handleOpenSelect = () => {
		setIsOpen(true);
	};
	const handleToggleSelect = () => {
		setIsOpen(!isOpen);
	};
	const handlePickOption = ({ target }) => {
		const sortBy = target.getAttribute("data-sort");
		const sortMethod = target.getAttribute("data-method");
		pickOption(sortBy, sortMethod);
		setSelectedOption(target.innerText);
		setIsOpen(false);
	};

	return {
		handleOpenSelect,
		handleToggleSelect,
		handlePickOption,
		selectedOption,
		isOpen,
		variants,
		triggerSortSelectRef,
	};
};

export default useSortSelect;
