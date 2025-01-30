import CategoryTree from "./Tree/CategoryTree"
import PostCategoryForm from "./Form/PostCategoryForm"

export const CategoriesManager = () => {
    return (
        <div className='relative my-11'>
            <div className='container relative flex items-start gap-6'>
                <PostCategoryForm />
                <CategoryTree/>
            </div>
        </div>
    )
}

