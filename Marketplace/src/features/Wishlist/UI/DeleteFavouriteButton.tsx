import { ComponentPropsWithoutRef, FC } from "react";
import Button from "../../../shared/UI/Button/Button";
import { Trash2 } from "lucide-react";

interface Props extends ComponentPropsWithoutRef<"button">{
	variant?: "circle" | "primary" | "secondary" | "icon"
}

const DeleteButton: FC<Props> = ({variant="icon", ...props}) => {
    return (
        <Button {...props} variant={variant} size="none" className={`${variant==="icon" ? "bg-inherit size-[50px] rounded-md" : "bg-white size-8 rounded-full"} flex items-center justify-center hover:bg-[#db4444] [&>svg]:hover:stroke-white [&>svg]:hover:fill-[#db4444]`}>
            <Trash2 />
        </Button>
    )
}

export default DeleteButton
