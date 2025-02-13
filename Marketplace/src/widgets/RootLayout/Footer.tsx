import GoogleApp from "../../assets/png-transparent-google-play-store-logo-google-play-app-store-android-wallets-text-label-logo.png"
import AppStore from "../../assets/download-appstore.png"
import Link from "shared/UI/Link/Link"
import { memo } from "react"
import { Facebook, Twitter, Instagram, Linkedin, SendHorizontal } from "lucide-react"
const Footer = () => {
    return (
        <footer className="darkside">
            <div className="container flex justify-between py-10">
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-6">
                        <h1>Logo</h1>
                        <h2>Subscribe</h2>
                        <p>Get 10% of your first order</p>
                    </div>
                    <form className="text-base border border-white flex justify-between p-2 rounded" onSubmit={(e)=>e.preventDefault}>
                        <input className="pl-1 bg-inherit" type="text" placeholder="Enter your email"/>
                        <button type="submit">
                            <SendHorizontal />
                        </button>
                    </form>
                </div>
                <div className="flex flex-col gap-6">
                    <h2>Support</h2>
                    <ul className="flex flex-col gap-4">
                        <li>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</li>
                        <li>exclusive@gmail.com</li>
                        <li>+88015-88888-9999</li>
                    </ul>
                </div>
                <div className="flex flex-col gap-6">
                    <h2>Account</h2>
                    <ul className="flex flex-col gap-4">
                        <li><Link to="profile">My Account</Link></li>
                        <li><Link to="/login">Login</Link> / <Link to="/register">Register</Link></li>
                        <li><Link to="/cart">Cart</Link></li>
                        <li><Link to="/wishlist">Wishlist</Link></li>
                        <li><Link to="/products">Shop</Link></li>
                    </ul>
                </div>
                <div className="flex flex-col gap-6">
                    <h2>Quick Link</h2>
                    <ul className="flex flex-col gap-4">
                        <li><Link to="/">Privacy Policy</Link></li>
                        <li><Link to="/">Terms Of Use</Link></li>
                        <li><Link to="/about">FAQ</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>
                <div className="flex flex-col gap-6">
                    <h2>Download App</h2>
                    <div className="flex flex-col gap-2">
                        <p>Save $3 with App New User Only</p>
                        <div className="flex gap-3">
                            <div className="flex flex-col gap-3 [&>img]:cursor-pointer">
                                <img src={GoogleApp} alt="googleapp" />
                                <img src={AppStore} alt="appstore" />
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-4 [&>img]:cursor-pointer">
                        <Facebook />
                        <Twitter />
                        <Instagram />
                        <Linkedin />
                    </div>
                </div>
            </div>
            <div className="border-t border-t-neutral-700 text-neutral-700 py-4">
                <div className="flex justify-center items-center container"><p>© Copyright Rimel 2022. All right reserved</p></div>
            </div>
        </footer>
    )
}

export default memo(Footer)
