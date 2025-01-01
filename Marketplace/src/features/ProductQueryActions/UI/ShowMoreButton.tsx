import Button from 'shared/UI/Button/Button'
import useQueryParams from '../useQueryParams'
import { ComponentPropsWithoutRef, FC } from 'react'

interface Props extends ComponentPropsWithoutRef<"button">{
    hasMore: boolean
}

const ShowMoreButton: FC<Props> = (props) => {
    const {hasMore, ...otherProps} = props

    if(!hasMore) return null

    const {pageParam, handleChangeQueryPage} = useQueryParams()

    const addMoreProducts = ()=>handleChangeQueryPage(pageParam+1)
    
    return (
        <Button {...otherProps} onClick={addMoreProducts}>Show More</Button>
    )
}

export default ShowMoreButton
