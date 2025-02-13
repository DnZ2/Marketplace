import { ArrowLeft, ArrowRight } from 'lucide-react';
import PropTypes from 'prop-types';

const Navigation = ({prev, next})=>{

    return (
        <div className="flex gap-2">
            <button onClick={prev} className="rounded-full p-[11px] bg-[#f0f0f0]">
                <ArrowLeft />
            </button>
            <button onClick={next} className="rounded-full p-[11px] bg-[#f0f0f0]">
                <ArrowRight />
            </button>
        </div>
    )
}
Navigation.propTypes={
    prev: PropTypes.func,
    next: PropTypes.func,
}
export default Navigation