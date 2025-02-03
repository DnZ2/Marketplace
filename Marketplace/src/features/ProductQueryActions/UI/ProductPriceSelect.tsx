import { ComponentPropsWithoutRef, memo } from 'react';
import { QueryParams, useGetProductsQuery } from 'shared/redux/query/endpoints/productsApi';
import Loader from 'shared/UI/Loader';
import NumberRange from 'shared/UI/NumberRange/NumberRange';
interface Props extends Omit<ComponentPropsWithoutRef<"form">, "onSelect">{
    onSelect: (min:number,max:number)=>void
	params: Pick<QueryParams, "maxPrice" | "minPrice">
	id?: string
}

const ProductPriceSelect = (props: Props) => {
    const {onSelect, params} = props
    const {data} = useGetProductsQuery({...params})

    if(!data) return <Loader />

    const initialMin = params.minPrice && parseFloat(params.minPrice) || data.diapason.from
    const initialMax = params.maxPrice && parseFloat(params.maxPrice) || data.diapason.to
    return (
        <NumberRange step={10} diapason={data.diapason} initialMin={initialMin} initialMax={initialMax} onSelect={onSelect} />
    )
}

export default memo(ProductPriceSelect)
