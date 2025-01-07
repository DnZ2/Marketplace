import useQueryParams from 'features/ProductQueryActions/useQueryParams'
import { memo } from 'react'

interface Props {
    totalPages?: number
}

const ProductPagination = memo((props: Props) => {

    const {totalPages} = props

    if(!totalPages) return null

    const {pageParam, handleChangeQueryPage} = useQueryParams()
    const pages = Array.from({ length: totalPages }, (_, i) => i + 1)
    
    return (
        <div className="flex justify-center gap-4">
            {pages?.map((pageNumber)=>
                <button onClick={()=>handleChangeQueryPage(pageNumber)} disabled={pageParam==pageNumber} className={`${pageParam==pageNumber ?"bg-gray-300" : "bg-gray-200"} rounded-md size-8 flex justify-center items-center`} key={pageNumber}>
                    {pageNumber}
                </button>
            )}
        </div>
    )
})

export default ProductPagination
