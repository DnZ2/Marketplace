import Button from 'shared/UI/Button/Button'
import useQueryParams from '../useQueryParams'
import { ComponentPropsWithoutRef,  memo } from 'react'

interface Props extends ComponentPropsWithoutRef<"button">{
    hasMore: boolean
}

const ShowMoreButton = (props: Props) => {
    const {hasMore, ...otherProps} = props

    if(!hasMore) return null

    const {pageParam,handleShowMoreProducts} = useQueryParams()

    const onClick = ()=>handleShowMoreProducts(pageParam)
    return (
        <Button {...otherProps} onClick={onClick}>Show More</Button>
    )
}

export default memo(ShowMoreButton)
