import { ChangeEvent, useState } from "react";
import useEvent from "react-use-event-hook";

export const useNumberInput = (savedValue: number, maxQuantity: number) => {
    const [value, setValue] = useState<number>(savedValue);

    const handleChangeValue = useEvent(({ target }: ChangeEvent<HTMLInputElement>) => {
        setValue(parseInt(target.value));
        if (target.value === "" || target.value === "0") {
            setValue(1);
        }
        if (Number(target.value) > maxQuantity) {
            setValue(maxQuantity);
        }
    })
    const handleIncreaseValue=useEvent(()=> {
        if (value >= 1 && value < maxQuantity) {
            setValue((value) => value + 1);
        }
    })
    const handleDecreaseValue=useEvent(()=> {
        if (value >= 2) {
            setValue((value) => value - 1);
        }
    })
    return {
        value,
        handleChangeValue,
        handleIncreaseValue,
        handleDecreaseValue,
    };
};
