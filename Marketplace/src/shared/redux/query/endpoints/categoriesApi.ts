import {baseApi} from "./api";
type Category = {
	value: string,
	prev: string,
	id: string
}
export interface CategoryItem extends Omit<Category, "prev"> {}
export interface CategoryId extends Pick<Category, "id"> {}
export const categoriesApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getCategories: build.query<CategoryItem[], void>({
            query: () => `categories`,
        }),
        postCategories: build.mutation<CategoryItem, Pick<Category, "value">>({
            query: (body) => ({
                url: `categories`,
                method: "POST",
                body,
            }),
            onQueryStarted(_, {dispatch, queryFulfilled}) {
                queryFulfilled.then(response=>{
                    const newCategory = response.data
                    dispatch(categoriesApi.util.updateQueryData("getCategories", undefined, (categories)=>{
                        categories.push(newCategory)
                    }))
                })
                queryFulfilled.catch(reject=>{
                    console.log("Failed postCategories", reject)
                })
            },
        }),
        putCategories: build.mutation<CategoryItem, Category>({
            query: (body) => ({
                url: `categories`,
                method: "PUT",
                body,
            }),
            onQueryStarted(_, {dispatch, queryFulfilled}) {
                queryFulfilled.then(response=>{
                    const newCategory = response.data
                    dispatch(categoriesApi.util.updateQueryData("getCategories", undefined, (categories)=>{
                        for(let i =0;i<categories.length;i++){
                            if(categories[i].id===newCategory.id) {categories[i] = newCategory;break}
                        }
                    }))
                })
                queryFulfilled.catch(reject=>{
                    console.log("Failed putCategories", reject)
                })
            },
        }),
        deleteCategories: build.mutation<string, CategoryId>({
            query: (id) => ({
                url: `categories/${id}`,
                method: "DELETE",
            }),
            onQueryStarted(_, {dispatch, queryFulfilled}) {
                queryFulfilled.then(response=>{
                    const deletedId = response.data
                    dispatch(categoriesApi.util.updateQueryData("getCategories", undefined, (categories)=>(categories.filter(category=>category.id!==deletedId))))
                })
                queryFulfilled.catch(reject=>{console.log("Failed deleteCategories", reject)})
            },
        }),
    }),
})
export const {useDeleteCategoriesMutation,useGetCategoriesQuery,usePostCategoriesMutation,usePutCategoriesMutation} = categoriesApi