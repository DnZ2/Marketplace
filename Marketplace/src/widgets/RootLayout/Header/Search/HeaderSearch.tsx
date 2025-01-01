import HeaderSearchWrapper from './UI/HeaderSearchWrapper'
import HeaderSearchTrigger from './UI/HeaderSearchTrigger'
import HeaderSearchContent from './UI/HeaderSearchContent'
import useSearchDebounce from './useSearchDebounce'
const HeaderSearch = () => {
    const {requiredProducts, searchDebounceRef, isOpen, isInputOpen, props, handleOpenInput, onControls} = useSearchDebounce()
    return (
        <HeaderSearchWrapper ref={searchDebounceRef} onKeyDown={onControls}>
            <HeaderSearchTrigger isInputOpen={isInputOpen} {...props} handleOpenInput={handleOpenInput}/>
            {isOpen && <HeaderSearchContent products={requiredProducts}/>}
        </HeaderSearchWrapper>
    )
}

export default HeaderSearch
