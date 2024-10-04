import { useEffect, useRef, useState } from "react";

const useSelect = (initial) => {
	const [isOpen, setIsOpen] = useState(false);
	const [selectedOption, setSelectedOption] = useState(initial);
	const triggerRef = useRef(null);
	const autocompleteRef = useRef(null);
	useEffect(() => {
		isOpen && window.addEventListener("mousedown", handleCloseSelect);
		return () => window.removeEventListener("mousedown", handleCloseSelect);
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isOpen, selectedOption]);
	function handleCloseSelect({ target }) {
		if (!triggerRef?.current?.contains(target)) {
			setIsOpen(false);
			selectedOption !== initial && setSelectedOption(initial);
		}
	}
	const handleToggleSelect = () => {
		setIsOpen(!isOpen);
	};
	const handleFocusSelect = () => {
		setIsOpen(true);
	};
	const handleChangeValue = ({ target }) => {
		setSelectedOption(target.value);
	};
	const handlePickOption = (value) => {
		setSelectedOption(value);
		setIsOpen(false);
	};
	const handleResetValue = () => {
		setSelectedOption("");
		setIsOpen(true);
		autocompleteRef.current?.focus();
	};

	return {
		handleToggleSelect,
		handlePickOption,
		handleChangeValue,
		handleFocusSelect,
		handleResetValue,
		selectedOption,
		isOpen,
		triggerRef,
		autocompleteRef,
	};
};

export default useSelect;
