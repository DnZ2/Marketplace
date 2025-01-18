import { Truck, Headset, ShieldCheck } from "lucide-react"
import { memo } from "react"
const Agitation = () => {
    return (
        <section className="flex items-center justify-center gap-20">
            <div className="flex flex-col items-center">
                <div className="bg-black size-20 rounded-full border-[11px] border-[#7D8184] flex justify-center items-center mb-6">
                    <Truck />
                </div>
                <h1 className="mb-2 text-xl font-semibold">FREE AND FAST DELIVERY</h1>
                <p className="text-sm">Free delivery for all orders over $140</p>
            </div>
            <div className="flex flex-col items-center">
                <div className="bg-black size-20 rounded-full border-[11px] border-[#7D8184] flex justify-center items-center mb-6">
                    <Headset />
                </div>
                <h1 className="mb-2 text-xl font-semibold">24/7 CUSTOMER SERVICE</h1>
                <p className="text-sm">Friendly 24/7 customer support</p>
            </div>
            <div className="flex flex-col items-center">
                <div className="bg-black size-20 rounded-full border-[11px] border-[#7D8184] flex justify-center items-center mb-6">
                    <ShieldCheck />
                </div>
                <h1 className="mb-2 text-xl font-semibold">MONEY BACK GUARANTEE</h1>
                <p className="text-sm">We reurn money within 30 days</p>
            </div>
        </section>
    )
}

export default memo(Agitation)
