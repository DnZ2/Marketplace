import PropTypes from 'prop-types';
import useSortSelect from './useSortSelect';
import Select from '../../shared/UI/Select';

const SortSelector = ({pickOption}) => {
	SortSelector.propTypes={
		pickOption: PropTypes.func,
	}

	const options = useSortSelect(pickOption)
  return (
	<Select options={options} />
  )
}

export default SortSelector
