import Input from "../../../../../../shared/UI/Input"
import Search from "../../../../../../assets/search.svg?react"
const HeaderSearchTrigger = (props) => {
	return (
	<>
		<Input className="text-xs flex-grow" placeholder="What are you looking for?" {...props}/>
		<Search className="cursor-pointer absolute right-3" />
	</>
  )
}

export default HeaderSearchTrigger
