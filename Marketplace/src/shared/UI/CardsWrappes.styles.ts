import { cva } from "class-variance-authority";
const CardsVariants = cva('grid items-center', {
    variants: {
        layout: {
            // Используется для корзины
            cart: 'grid-cols-[1fr_1fr_1fr_1fr_80px] py-6 pl-7 shadow-[0_0_4px_1px_#dddddd] rounded-md',

            // Отображение по умолчанию
            default: 'grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] gap-y-14 gap-x-7 justify-items-center',

            // Для выпадающих элементов корзины
            'cart-dropdown': 'grid-cols-[10%_1fr_15%_7%] gap-x-2 py-3 pr-4',
            
            // Для строки поиска
            search: 'grid-cols-[10%_2fr_1fr] gap-x-2 py-3 pr-4 bg-inherit',
        },
    },
    defaultVariants: {
        layout: "default",
    },
});
export default CardsVariants;
