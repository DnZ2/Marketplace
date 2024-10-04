import PropTypes from 'prop-types';
import usePriceSelector from './usePriceSelector';
import Checked from "../../../assets/checked-svgrepo-com.svg?react"

function PriceSelector ({className, diapason, submit, id})  {
	PriceSelector.propTypes={
		diapason: PropTypes.object,
		className: PropTypes.string,
		id: PropTypes.string,
		submit: PropTypes.func,
	}
	const {
		minPriceValue,
		maxPriceValue,
		handleChangeMaxPrice,
		handleChangeMinPrice,
		handleSubmitForm
	} = usePriceSelector(diapason, submit)

  return (
	<div autoComplete="off" className={`flex items-center gap-4 ${className}`}>
		<input id={id} className="p-2 rounded" type="number" value={minPriceValue} onChange={handleChangeMinPrice} placeholder={`from ${diapason?.from}`} />
		<input className="p-2 rounded" type="number" value={maxPriceValue} onChange={handleChangeMaxPrice} placeholder={`to ${diapason?.to}`}/>
		<button type='button' className='rounded-full bg-white p-2' onClick={handleSubmitForm}><Checked /></button>
	</div>
  )
}

export default PriceSelector
