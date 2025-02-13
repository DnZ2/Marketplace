import CardListLayout from "../../../widgets/CardListLayout"
import { NavLink } from "react-router-dom"
import PlayStation5 from "../../../assets/ps5-slim-goedkope-playstation_large 1.png"
import Woman from "../../../assets/attractive-woman-wearing-hat-posing-black-background 1-Photoroom.png"
import Speakers from "../../../assets/69-694768_amazon-echo-png-clipart-transparent-amazon-echo-png 1.png"
import Perfume from "../../../assets/652e82cd70aa6522dd785109a455904c.png"
import { memo } from "react"
const GridProducts = () => {
    return (
        <CardListLayout title="Featured" subtitle="New Arrival">
            <div className="h-[60vh] grid grid-cols-[repeat(4,_minmax(200px,_25vw))] grid-rows-[repeat(2,_minmax(200px,_50vh))] gap-8">
                <figure className="row-span-2 col-span-2 relative before:bg-black before:absolute before:content-[''] before:transition-opacity before:duration-1000 before:size-full before:hover:opacity-0 before:left-0 px-8 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.5),#000000)] h-full ">
                    <img className="h-[85%] w-full object-contain absolute bottom-0" src={PlayStation5} alt="PS5" />
                    <article className="absolute bottom-8 text-white flex flex-col gap-4">
                        <h1 className="font-semibold text-2xl">PlayStation 5</h1>
                        <p className="text-sm">Black and White version of the PS5 coming out on sale.</p>
                        <NavLink to="/products" className="underline font-medium">Shop Now</NavLink>
                    </article>
                </figure>
                <figure className="col-span-2 relative before:bg-black before:absolute before:content-[''] before:transition-opacity before:duration-1000 before:size-full before:hover:opacity-0 before:left-0 px-8 bg-[radial-gradient(circle_at_80%_50%,rgba(0,0,0,0.5),#000000)]">
                    <img className="h-full absolute bottom-0 right-0" src={Woman} alt="PS5" />
                    <article className="absolute bottom-8 text-white flex flex-col gap-4">
                        <h1 className="font-semibold text-2xl">Women’s Collections</h1>
                        <p className="text-sm">Featured woman collections that give you another vibe.</p>
                        <NavLink to="/products" className="underline font-medium">Shop Now</NavLink>
                    </article>
                </figure>
                <figure className="relative before:bg-black before:absolute before:content-[''] before:transition-opacity before:duration-1000 before:size-full before:hover:opacity-0 before:left-0 px-8 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.5),#000000)]">
                    <img className="h-[70%] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" src={Speakers} alt="PS5" />
                    <article className="absolute bottom-8 text-white flex flex-col gap-4">
                        <h1 className="font-semibold text-2xl">Speakers</h1>
                        <p className="text-sm">Amazon wireless speakers</p>
                        <NavLink to="/products" className="underline font-medium">Shop Now</NavLink>
                    </article>
                </figure>
                <figure className="relative left-0 before:bg-black before:absolute before:content-[''] before:transition-opacity before:duration-1000 before:size-full before:hover:opacity-0 before:left-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.5),#000000)] px-8">
                    <img className="h-[70%] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" src={Perfume} alt="PS5" />
                    <article className="absolute bottom-8 text-white flex flex-col gap-4">
                        <h1 className="font-semibold text-2xl">Perfume</h1>
                        <p className="text-sm">GUCCI INTENSE OUD EDP</p>
                        <NavLink to="/products" className="underline font-medium">Shop Now</NavLink>
                    </article>
                </figure>
            </div>
        </CardListLayout>
    )
}

export default memo(GridProducts)
