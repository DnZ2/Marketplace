import QR from "../../assets/Qrcode 1.png"
import GoogleApp from "../../assets/png-transparent-google-play-store-logo-google-play-app-store-android-wallets-text-label-logo.png"
import AppStore from "../../assets/download-appstore.png"
import Facebook from "../../assets/Icon-Facebook.svg?react"
import Twitter from "../../assets/Icon-Twitter.svg?react"
import Instagram from "../../assets/icon-instagram.svg?react"
import Linkedin from "../../assets/Icon-Linkedin.svg?react"
import Send from "../../assets/icon-send.svg?react"
import { NavLink } from "react-router-dom"
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
                            <Send/>
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
                        <li><NavLink to="profile">My Account</NavLink></li>
                        <li><NavLink to="/login">Login</NavLink> / <NavLink to="/register">Register</NavLink></li>
                        <li><NavLink to="/cart">Cart</NavLink></li>
                        <li><NavLink to="/wishlist">Wishlist</NavLink></li>
                        <li><NavLink to="/products">Shop</NavLink></li>
                    </ul>
                </div>
                <div className="flex flex-col gap-6">
                    <h2>Quick Link</h2>
                    <ul className="flex flex-col gap-4">
                        <li><NavLink to="/">Privacy Policy</NavLink></li>
                        <li><NavLink to="/">Terms Of Use</NavLink></li>
                        <li><NavLink to="/about">FAQ</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                    </ul>
                </div>
                <div className="flex flex-col gap-6">
                    <h2>Download App</h2>
                    <div className="flex flex-col gap-2">
                        <p>Save $3 with App New User Only</p>
                        <div className="flex gap-3">
                            <img src={QR} alt="QR" />
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

export default Footer
