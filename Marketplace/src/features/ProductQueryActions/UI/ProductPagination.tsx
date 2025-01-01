import useQueryParams from 'features/ProductQueryActions/useQueryParams'
import { FC } from 'react'

interface Props {
    totalPages: number
}

const ProductPagination: FC<Props> = (props) => {

    const {totalPages} = props

    if(!totalPages) return null

    const {pageParam} = useQueryParams()
    const pages = Array.from({ length: totalPages }, (_, i) => i + 1)
    
    return (
        <div className="flex justify-center gap-4">
            {pages?.map((pageNumber)=>
                <button className={`${pageParam==pageNumber ?"bg-gray-300" : "bg-gray-200"} rounded-md size-8 flex justify-center items-center`} key={pageNumber}>
                    {pageNumber}
                </button>
            )}
        </div>
    )
}

export default ProductPagination