import HeaderSearchWrapper from './UI/HeaderSearchWrapper'
import HeaderSearchTrigger from './UI/HeaderSearchTrigger'
import HeaderSearchContent from './UI/HeaderSearchContent'
import useSearchDebounce from './useSearchDebounce'
const HeaderSearch = () => {
	const {requiredProducts, searchDebounceRef, isOpen, props} = useSearchDebounce()
  return (
	<HeaderSearchWrapper ref={searchDebounceRef}>
		<HeaderSearchTrigger {...props}/>
		{isOpen && <HeaderSearchContent products={requiredProducts}/>}
	</HeaderSearchWrapper>
  )
}

export default HeaderSearch
