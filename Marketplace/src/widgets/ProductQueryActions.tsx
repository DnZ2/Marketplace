import { ProductSearchForm, ProductSortSelector, ProductFilterByCategory, ProductPriceSelector } from "features/ProductQueryActions/UI"
import { memo, SyntheticEvent, useId } from "react"
import { Diapason } from "shared/redux/query/endpoints"
import { Label } from "shared/UI/Form"

interface Actions{
    onSearch: (e: SyntheticEvent)=>void
    onSort: (value: string)=>void
    onFilterByCategory: (value: string)=>void
    onFilterByPrice: ()=>void
    onResetCategory: ()=>void
}
interface Params{
    category: string
    diapason: Diapason
}

interface Props{
    params: Params
    actions: Actions
}

const ProductQueryActions = (props: Props) => {
    const {params, actions} = props
    const categorySelectId = useId()
    const priceSelectId = useId()
    const sortSelectId = useId()
    return (
        <div className="w-full flex flex-col gap-4">
            <ProductSearchForm onSubmit={actions.onSearch}/>
            <div className="w-full flex gap-4 items-center">
                <div>
                    <Label htmlFor={sortSelectId} className="pl-1 text-xs text-gray-400">Sorted by</Label>
                    <ProductSortSelector onSort={actions.onSort}/>
                </div>
                <div>
                    <Label htmlFor={categorySelectId} className="pl-1 text-xs text-gray-400">Category</Label>
                    <ProductFilterByCategory category={params.category} onReset={actions.onResetCategory} onSelect={actions.onFilterByCategory}/>
                </div>
                <div>
                    <Label htmlFor={priceSelectId} className="pl-1 text-xs text-gray-400">Price selector</Label>
                    <ProductPriceSelector diapason={params.diapason} onFilterByPrice={actions.onFilterByPrice} />
                </div>
            </div>
        </div>
    )
}

export default memo(ProductQueryActions)
