import { useState } from "react";
const useInput = (initial = "") => {
	const [value, setValue] = useState(initial);
	const onChange = ({ target }) => {
		setValue(target.value);
	};
	const reset = () => {
		setValue("");
	};
	return { props: { value, onChange }, reset };
};

export default useInput;
