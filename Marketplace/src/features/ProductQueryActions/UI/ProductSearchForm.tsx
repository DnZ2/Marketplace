import { memo } from 'react'
import useQueryParams from '../useQueryParams'

const ProductSearchForm = memo(() => {
    const {handleSearchQuery} = useQueryParams()
    return (
        <form className="w-full flex" onSubmit={handleSearchQuery}>
            <input className="text-2xl rounded-s-xl p-2 w-full" type="search" name="search" placeholder="Query..."/>
            <button className="p-2 text-xl size-12 bg-gray-200 rounded-e-xl flex justify-center items-center" type="submit">S</button>
        </form>
    )
})

export default ProductSearchForm
