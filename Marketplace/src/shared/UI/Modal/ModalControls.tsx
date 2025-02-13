import { ComponentPropsWithoutRef } from "react"

interface Props extends ComponentPropsWithoutRef<"div">{
	align: "self-end" | "self-center" | "self-start"
}

const ModalControls = (props: Props) => {
    const {children, align} = props
    return (
        <div className={`${align} self flex gap-3`}>
            {children}
        </div>
    )
}

export default ModalControls
