import { ComponentPropsWithoutRef, FC } from "react"

interface Props extends ComponentPropsWithoutRef<"div">{
	align: "self-end" | "self-center" | "self-start"
}

const ModalControls: FC<Props> = ({children, align}) => {
    return (
        <div className={`${align} self flex gap-3`}>
            {children}
        </div>
    )
}

export default ModalControls
