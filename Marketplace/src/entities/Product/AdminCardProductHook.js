import { useState } from "react";
import {
	usePatchProductMutation,
	useDeleteProductMutation,
} from "../../shared/redux/query/productsApi";

export const useAdminCardControlls = (data) => {
	const [isEditing, setIsEditing] = useState(false);
	const [isDeleting, setIsDeleting] = useState(false);
	const [title, setTitle] = useState(data.title);
	const [price, setPrice] = useState(data.price);
	const [discount, setDiscount] = useState(data.discount);
	const [maxQuantity, setMaxQuantity] = useState(data.maxQuantity);
	const [patchProduct] = usePatchProductMutation();
	const [deleteProduct] = useDeleteProductMutation();
	const handleOpenEditField = () => {
		setIsEditing(true);
	};
	const handleCloseEditField = () => {
		setIsEditing(false);
	};
	const handleOpenDeleteField = () => {
		setIsDeleting(true);
	};
	const handleCloseDeleteField = () => {
		setIsDeleting(false);
	};
	const handleEditProduct = async () => {
		const { category, id } = data;
		if (
			title === data.title &&
			price === data.price &&
			discount === data.discount &&
			maxQuantity === data.maxQuantity
		) {
			setIsEditing(false);
		} else {
			await patchProduct({
				id,
				title,
				price,
				maxQuantity,
				discount,
				category,
			}).unwrap();
			setIsEditing(false);
		}
	};
	const handleDeleteProduct = async () => {
		await deleteProduct(data.id).unwrap();
		setIsDeleting(false);
	};
	const handleInputPrice = ({ target }) => {
		setPrice(Number(target.value));
	};
	const handleInputTitle = ({ target }) => {
		setTitle(target.value);
	};
	const handleInputDiscount = ({ target }) => {
		setDiscount(Number(target.value));
	};
	const handleInputMaxQuantity = ({ target }) => {
		setMaxQuantity(Number(target.value));
	};
	return {
		handleOpenEditField,
		handleDeleteProduct,
		handleInputPrice,
		handleInputTitle,
		handleInputDiscount,
		handleInputMaxQuantity,
		handleEditProduct,
		handleCloseDeleteField,
		handleOpenDeleteField,
		handleCloseEditField,
		isEditing,
		isDeleting,
		title,
		maxQuantity,
		price,
		discount,
	};
};
