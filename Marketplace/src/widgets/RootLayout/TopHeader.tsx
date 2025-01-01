import Dropdowm from '../../assets/fa-angle-down.svg?react'

const TopHeader = () => {
    return (
        <div className="relative py-4 text-sm darkside">
            <div className="flex justify-end container">
                <div className="cursor-pointer gap-1 flex items-center">
                    <p>Language</p>
                    <Dropdowm />
                </div>
            </div>
            <p className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
                <span className="underline font-bold cursor-pointer">Shop now</span>
            </p>
        </div>
    )
}

export default TopHeader
