import { useState } from "react";
import { usePostProductMutation } from "../../shared/redux/query/productsApi";

export const useAdminPageForm = () => {
	const [postProduct] = usePostProductMutation();
	const [title, setTitle] = useState("");
	const [price, setPrice] = useState("");
	const [category, setCategory] = useState("");
	const [maxQuantity, setMaxQuantity] = useState("");
	const [errorMessage, setErrorMessage] = useState("");

	const handleInputPrice = ({ target }) => {
		setPrice(Number(target.value));
	};
	const handleInputTitle = ({ target }) => {
		setTitle(target.value);
	};
	const handleInputCategory = ({ target }) => {
		setCategory(target.value);
	};
	const handleInputMaxQuantity = ({ target }) => {
		setMaxQuantity(Number(target.value));
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			setErrorMessage("");
			await postProduct({ title, price, maxQuantity, category }).unwrap();
			setCategory("");
			setTitle("");
			setPrice("");
			setMaxQuantity("");
		} catch (e) {
			if (e.status === 409) setErrorMessage(e.data.message);
		}
	};

	return {
		handleInputPrice,
		handleInputTitle,
		handleInputCategory,
		handleInputMaxQuantity,
		handleSubmit,
		errorMessage,
		title,
		price,
		category,
		maxQuantity,
	};
};
