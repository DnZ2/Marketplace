import { useState } from "react";

const usePriceSelector = (diapason, submit) => {
	const [minPriceValue, setMinPriceValue] = useState("");
	const [maxPriceValue, setMaxPriceValue] = useState("");

	const validationPrice = (value, cb) => {
		value > diapason?.to ? cb(diapason?.to) : cb(value);
	};

	const handleChangeMinPrice = ({ target }) => {
		validationPrice(target.value, setMinPriceValue);
	};
	const handleChangeMaxPrice = ({ target }) => {
		validationPrice(target.value, setMaxPriceValue);
	};
	const handleSubmitForm = () => {
		if (minPriceValue < diapason?.from && minPriceValue !== "") {
			setMinPriceValue(diapason?.from);
			submit(diapason?.from, maxPriceValue);
		} else if (minPriceValue > maxPriceValue) {
			setMaxPriceValue("");
			submit(minPriceValue, diapason?.to);
		} else {
			submit(minPriceValue, maxPriceValue);
		}
	};
	return {
		minPriceValue,
		maxPriceValue,
		handleChangeMinPrice,
		handleChangeMaxPrice,
		handleSubmitForm,
	};
};

export default usePriceSelector;
