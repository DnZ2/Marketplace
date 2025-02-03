import { ProductSearchForm, ProductSortSelect, ProductPriceSelect, ProductCategorySelect } from "features/ProductQueryActions/UI"
import { memo, SyntheticEvent, useId, useMemo } from "react"
import { QueryParams } from "shared/redux/query/endpoints"
import { Label } from "shared/UI/Form"

interface Actions{
    onSearch: (e: SyntheticEvent)=>void
    onSort: (value: string)=>void
    onFilterByCategory: (value: string)=>void
    onFilterByPrice: (min: number, max: number)=>void
    onResetCategory: ()=>void
}

interface Props{
    params: Required<QueryParams>
    actions: Actions
}

const ProductQueryActions = (props: Props) => {
    const {params, actions} = props

    const categorySelectId = useId()
    const priceSelectId = useId()
    const sortSelectId = useId()
    
    const diapason = useMemo(()=>({minPrice: params.minPrice, maxPrice: params.maxPrice}), [params.minPrice,params.maxPrice])
    return (
        <div className="w-full flex flex-col gap-4">
            <ProductSearchForm onSubmit={actions.onSearch}/>
            <div className="w-full flex gap-4 items-center">
                <div>
                    <Label htmlFor={sortSelectId} className="pl-1 text-xs text-gray-400">Sorted by</Label>
                    <ProductSortSelect id={sortSelectId} onSelect={actions.onSort}/>
                </div>
                <div>
                    <Label htmlFor={categorySelectId} className="pl-1 text-xs text-gray-400">Category</Label>
                    <ProductCategorySelect id={categorySelectId} category={params.category} onReset={actions.onResetCategory} onSelect={actions.onFilterByCategory}/>
                </div>
                <div>
                    <Label htmlFor={priceSelectId} className="pl-1 text-xs text-gray-400">Price selector</Label>
                    <ProductPriceSelect params={diapason} id={priceSelectId} onSelect={actions.onFilterByPrice} />
                </div>
            </div>
        </div>
    )
}

export default memo(ProductQueryActions)
