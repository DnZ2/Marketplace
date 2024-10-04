import { useRef, useState, useEffect } from "react";
import {
	usePatchProductMutation,
	useDeleteProductMutation,
} from "../../shared/redux/query/productsApi";

export const useAdminProductControlls = (data) => {
	const titleInputRef = useRef(null);
	const priceInputRef = useRef(null);
	const discountInputRef = useRef(null);
	const maxQuantityInputRef = useRef(null);
	const [patchProduct] = usePatchProductMutation();
	const [deleteProduct] = useDeleteProductMutation();
	const [isEditing, setEditing] = useState(false);
	const [isDeleting, setDeleting] = useState(false);

	useEffect(() => {
		titleInputRef.current.value = data.title;
		priceInputRef.current.value = data.price;
		discountInputRef.current.value = data.discount;
		maxQuantityInputRef.current.value = data.maxQuantity;
	}, []);

	const handleFirstAction = async () => {
		!isEditing && !isDeleting && setEditing(true);
		if (isEditing) {
			const { category, id } = data;
			if (
				titleInputRef.current.value === data.title &&
				priceInputRef.current.value === data.price &&
				discountInputRef.current.value === data.discount &&
				maxQuantityInputRef.current.value === data.maxQuantity
			)
				setEditing(false);
			else {
				await patchProduct({
					id,
					title: titleInputRef.current.value,
					price: Number(priceInputRef.current.value),
					maxQuantity: Number(maxQuantityInputRef.current.value),
					discount: Number(discountInputRef.current.value),
					category,
				}).unwrap();
			}
			setEditing(false);
		}
		if (isDeleting) {
			await deleteProduct(data.id).unwrap();
			setDeleting(false);
		}
	};
	const handleSecondAction = () => {
		!isDeleting && !isEditing && setDeleting(true);
		if (isEditing) {
			titleInputRef.current.value = data.title;
			priceInputRef.current.value = data.price;
			discountInputRef.current.value = data.discount;
			maxQuantityInputRef.current.value = data.maxQuantity;
			setEditing(false);
		}
		if (isDeleting) {
			setDeleting(false);
		}
	};

	return {
		handleFirstAction,
		handleSecondAction,
		titleInputRef,
		priceInputRef,
		discountInputRef,
		maxQuantityInputRef,
		isEditing,
		isDeleting,
	};
};
