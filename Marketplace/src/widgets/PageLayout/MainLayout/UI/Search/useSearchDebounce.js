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
	useEffect(() => {
		isOpen && document.addEventListener("mouseup", handleCloseList);
		return () => document.removeEventListener("mouseup", handleCloseList);
	}, [isOpen]);
	function handleCloseList({ target }) {
		if (!searchDebounceRef?.current?.contains(target)) {
			setIsOpen(false);
		}
	}
	const onFocus = () => {
		setIsOpen(true);
	};
	const onKeyDown = (e) => {
		if (e.code === "Enter") {
			setValue("");
			setIsOpen(false);
			navigate("/products?search=" + value);
		}
	};
	const debounceSearch = useDebounce(async (value) => {
		const { products } = await trigger(
			{
				searchParam: value,
				limitParam: 5,
			},
			true
		).unwrap();
		setRequiredProducts(products);
		setIsOpen(true);
	}, 700);
	const onChange = ({ target }) => {
		setValue(target.value);
		debounceSearch(target.value.trim());
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
	};
};

export default useSearchDebounce;
