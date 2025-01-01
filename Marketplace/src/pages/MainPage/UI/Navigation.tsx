import Back from "../../../assets/prev.svg?react"
import Forward from "../../../assets/next.svg?react"
import PropTypes from 'prop-types';

const Navigation = ({prev, next})=>{

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
Navigation.propTypes={
    prev: PropTypes.func,
    next: PropTypes.func,
}
export default Navigation