import { Star } from 'lucide-react';
import { Control, Controller } from 'react-hook-form'

export interface FormValues{
    rating: number;
    reviewText: string;
}
interface Props {
    control: Control<FormValues>
}

const RatingInput = ({control}: Props) => {
    return (
        <>
            {[1, 2, 3, 4, 5].map((value) => (
                <Controller
                    key={value}
                    name="rating"
                    control={control}
                    render={({ field }) => ( 
                        <label className="relative inline-block cursor-pointer">
                            <input
                                type="radio"
                                className="hidden"
                                {...field}
                                value={value}
                            />
                            <Star className="size-10" />
                            <Star
                                className={`absolute left-0 top-0 size-10 z-[1] ${
                                    value <= field.value ? "fill-yellow-400" : "fill-gray-400"
                                }`}
                                aria-hidden="true"
                            />
                        </label>
                    )}
                />))}
        </>
   
    )
}

export default RatingInput
