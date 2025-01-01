import PropTypes from "prop-types"
import AdminProductCard from "../Product/AdminProductCard"
const AdminProductsTable = ({data, categories}) => {
    return (
        <table className="flex flex-col divide-y-2 border-2 rounded-md">
            <thead>
                <tr className='[&>th]:p-2 grid grid-cols-[2fr_1fr_1fr_1fr_1fr] divide-x-2'>
                    <th>Product</th>
                    <th>Price, $</th>
                    <th>Discount, %</th>
                    <th>Quantity</th>
                    <th className="h-full"></th>
                </tr>
            </thead>
            <tbody className="divide-y-2">
                {data.map((item)=>
                    <AdminProductCard key={item.id} data={item} categories={categories}/>
                )}
            </tbody>
        </table>
    )
}
AdminProductsTable.propTypes={
    data: PropTypes.array,
    categories: PropTypes.array
}
export default AdminProductsTable
