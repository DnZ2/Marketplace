import { Rating } from "../redux/query/endpoints/productsApi";
const evalRatingValue = (object: Rating) => {
    const sums = Object.entries(object).reduce(
        (sum, [rating, count]) => sum + Number(rating) * count,
        0
    );
    const length = Object.values(object).reduce((sum, count) => sum + count, 0);
    const percent = (sums / length) * 20;
    return {
        length,
        percent,
    };
};

export default evalRatingValue;
