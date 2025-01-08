import { ComponentPropsWithoutRef } from 'react';
import { Rating } from 'shared/redux/query/endpoints';

interface Props extends ComponentPropsWithoutRef<"div">{
    rating: Rating
}

const ReviewShowCase = (props: Props) => {
    const {rating, className, ...otherProps} = props
    return (
        <div className={`flex items-center gap-1 h-5 ${className}`} {...otherProps}>
            <div className="relative flex items-center gap-[10px] text-xl before:content-['★★★★★'] before:block before:text-[#7d8184] before:w-fit">
                <div className="absolute h-full top-0 left-0 overflow-hidden before:content-['★★★★★'] before:absolute before:text-[#ffd300] before:w-full before:h-full before:top-0 before:left-0" style={{width: rating.width+"%"}}></div>
            </div>
            <span className='text-sm text-[#7d8184]'>{`(${rating.count})`}</span>
        </div>
    )
}

export default ReviewShowCase
