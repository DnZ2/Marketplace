import Back from "../../assets/prev.svg?react"
import Forward from "../../assets/next.svg?react"
import PropTypes from 'prop-types';

const Navigation = ({prev, next})=>{
	Navigation.propTypes={
		prev: PropTypes.func,
		next: PropTypes.func,
	}
	return (
		<div className="flex gap-2">
			<button onClick={prev} className="rounded-full p-[11px] bg-[#f0f0f0]">
				<Back />
			</button>
			<button onClick={next} className="rounded-full p-[11px] bg-[#f0f0f0]">
				<Forward/>
			</button>
		</div>
	)
}
export default Navigation