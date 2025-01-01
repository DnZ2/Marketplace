import { ChangeEvent, useState } from "react";

export const useNumberInput = (savedValue: number, maxQuantity: number) => {
    const [value, setValue] = useState<number>(savedValue);

    function handleChangeValue({ target }: ChangeEvent<HTMLInputElement>) {
        setValue(parseInt(target.value));
        if (target.value === "" || target.value === "0") {
            setValue(1);
        }
        if (Number(target.value) > maxQuantity) {
            setValue(maxQuantity);
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
        handleChangeValue,
        handleIncreaseValue,
        handleDecreaseValue,
    };
};
