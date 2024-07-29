import { useState } from "react";
const useInput = (initial, validation = { regexp: /^/, error: "" }) => {
	const [value, setValue] = useState(initial);
	const [error, setError] = useState("");
	const onChange = ({ target }) => {
		if (!validation.regexp.test(target.value)) {
			setValue(target.value);
			setError(validation.error);
		} else {
			setValue(target.value);
			setError("");
		}
	};
	const reset = () => {
		setValue("");
	};
	return { props: { value, onChange }, error, reset };
};

export default useInput;
