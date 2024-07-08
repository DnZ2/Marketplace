import Arrow from "../../assets/fa-angle-down.svg?react"
import PropTypes from 'prop-types';
import Plus from "../../assets/plus.svg?react"
import Minus from "../../assets/minus.svg?react"

const NumberInput = ({type, maxWidthInput, value, handleChangeValue, handleIncreaseValue, handleDecreaseValue}) => {
	NumberInput.propTypes={
		value: PropTypes.number,
		maxWidthInput: PropTypes.number,
		type: PropTypes.string,
		handleChangeValue: PropTypes.func,
		handleIncreaseValue: PropTypes.func,
		handleDecreaseValue: PropTypes.func,
	}

  return (
	<div className={type==="secondary" ? "flex items-center h-full" : "flex gap-2 py-[6px] px-3 rounded-md border-2 w-fit"}>
		{type==="secondary"
		? <>
			<button className="w-10 h-full rounded-tl rounded-bl border-[1px] border-[#7D8184] flex justify-center items-center" onClick={handleDecreaseValue}>
				<Minus className="fill-black rotate-180"/>
			</button>
			<input className="bg-inherit w-20 text-xl h-full text-center border-solid border-0 border-y-[1px] border-[#7D8184]" type="number" value={value} onChange={handleChangeValue}/>
			<button className="w-10 h-full bg-[#db4444] flex justify-center items-center rounded-tr rounded-br" onClick={handleIncreaseValue}>
				<Plus/>
			</button>
		</>
		: <>
			<input style={{width: `${maxWidthInput}px`}} className="bg-inherit" type="number" value={value} onChange={handleChangeValue}/>
			<div className="flex flex-col">
				<button className="px-1 py-[0.30rem]" onClick={handleIncreaseValue}>
					<Arrow className="fill-black rotate-180"/>
				</button>
				<button className="px-1 py-[0.30rem]" onClick={handleDecreaseValue}>
					<Arrow className="fill-black"/>
				</button>
			</div>
		</>
		}

	</div>
  )
}

export default NumberInput
