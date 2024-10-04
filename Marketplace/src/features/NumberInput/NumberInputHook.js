import { useState } from "react";

export const useNumberInputHook = (savedValue, maxQuantity) => {
	const [value, setValue] = useState(savedValue);
	const maxWidthInput =
		String(value).length > 2 ? String(value).length * 10 : 20;

	function handleChangeValue({ target }) {
		setValue(parseInt(target.value));
		if (target.value === "" || target.value === "0") {
			setValue(1);
		}
		if (Number(target.value) > maxQuantity) {
			setValue(parseInt(maxQuantity));
		}
	}
	function handleIncreaseValue() {
		if (value >= 1 && value < maxQuantity) {
			setValue((value) => value + 1);
		}
	}
	function handleDecreaseValue() {
		if (value >= 2) {
			setValue((value) => value - 1);
		}
	}

	return {
		value,
		maxWidthInput,
		handleChangeValue,
		handleIncreaseValue,
		handleDecreaseValue,
	};
};
