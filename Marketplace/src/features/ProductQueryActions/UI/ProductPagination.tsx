import { ComponentPropsWithoutRef, memo } from 'react'

interface Props extends ComponentPropsWithoutRef<"button">{
    totalPages: number
    pageParam: number 
}

const ProductPagination = (props: Props) => {

    const {totalPages, pageParam, ...otherProps} = props

    if(!totalPages) return null

    const pages = Array.from({ length: totalPages }, (_, i) => i + 1)
    
    return (
        <div className="flex justify-center gap-4">
            {pages?.map((pageNumber)=>
                <button key={pageNumber} disabled={pageParam==pageNumber} className={`${pageParam==pageNumber ?"bg-gray-300" : "bg-gray-200"} rounded-md size-8 flex justify-center items-center`} {...otherProps}>
                    {pageNumber}
                </button>
            )}
        </div>
    )
}

export default memo(ProductPagination)
