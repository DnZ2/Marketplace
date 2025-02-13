import { FC, FocusEventHandler } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Search } from "lucide-react";

interface Props {
	isInputOpen: boolean
	handleOpenInput: FocusEventHandler<HTMLButtonElement>
}

const HeaderSearchTrigger: FC<Props> = ({isInputOpen, handleOpenInput, ...props})=> {
    return (
        <AnimatePresence initial={false}>
            <button onFocus={handleOpenInput} className="absolute rounded-full bg-[#F5F5F5] size-10 cursor-pointer flex items-center justify-center">
                <Search />
            </button>
            {isInputOpen &&
                <motion.input key="search" name="search" {...props}
                    initial={{
                        width: "0px",
                        borderRadius: "50%"
                    }}
                    animate={{
                        width: "240px",
                        borderRadius: "10px"
                    }}
                    exit={{
                        width: "0px",
                        borderRadius: "50%",
                        paddingRight: "0px"
                    }}
                    transition={{duration: 0.7}}
                    className="text-xs pl-10 px-4 py-3 bg-[#F5F5F5] rounded-md outline-1 focus:outline"
                    placeholder="What are you looking for?"
                />
            }
        </AnimatePresence>
    )
}

export default HeaderSearchTrigger
