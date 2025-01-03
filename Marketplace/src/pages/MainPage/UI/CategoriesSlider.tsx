import CardListLayout from "../../../widgets/CardListLayout";
import Navigation from "./Navigation";
import { useGetCategoriesQuery } from "../../../shared/redux/query/endpoints/categoriesApi";
import 'swiper/css';
import "swiper/swiper-bundle.css"
import Loader from "../../../shared/UI/Loader";
const CategoriesSlider = () => {
    const {data, isLoading} = useGetCategoriesQuery()
    if(isLoading){
        return <Loader />
    }
    return (
        <CardListLayout
            title="Categories"
            subtitle="Browse By Category"
            controls={<Navigation next={() => 1} prev={() => 1} />}>
                Slider
        </CardListLayout>
    )
}

export default CategoriesSlider
