import Autocomplete from '../../shared/UI/Autocomplete'
import { useGetCategoriesQuery } from '../../shared/redux/query/productsApi'
import PropTypes from 'prop-types';
import useCategorySelect from './useCategorySelect';

const CategorySelector = ({pickOption, queryParam}) => {
	CategorySelector.propTypes={
		pickOption: PropTypes.func,
		queryParam: PropTypes.string,
	}
	const {data} = useGetCategoriesQuery()
	const selectOptions = useCategorySelect(data, pickOption, queryParam)
  return (
	<Autocomplete options={selectOptions}/>
  )
}

export default CategorySelector
