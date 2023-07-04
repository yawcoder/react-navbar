import { useState } from "react";
import {FaBars} from "react-icons/fa";
import logo from "./assets/vite.svg"
import links from "./links"


const Navbar = () => {
    const [showLinks, setShowLinks] = useState(false);

    return(
        <nav className={`${showLinks ? "flex justify-between py-5 px-7 relative md:px-10 md:static" : "flex justify-between py-5 px-7 relative shadow-lg md:px-10 md:static"}`}>
            <div className="w-[10%] md:w-[10%] lg:w-[5%]">
                <img src={logo} alt="logo" className="w-full" />
            </div>
            <ul className={`${showLinks ? "absolute right-0 top-20 shadow-lg w-full text-center duration-300 md:static md:flex md:justify-end md:shadow-none" : "absolute right-0 top-20 shadow-lg w-0 text-center overflow-hidden duration-300 md:static md:overflow-visible md:flex md:justify-end md:w-full md:shadow-none"}`}>
            {
                links.map((link) => {
                    return <li key={link.id} className="capitalize my-5 text-lg hover:underline md:mx-10"><a href={link.url}>{link.text}</a></li>
                })
            }
            </ul>
            <button className={`${showLinks ? "text-2xl rotate-90 duration-300 md:hidden" : "text-2xl duration-300 md:hidden"}`} onClick={() => setShowLinks(!showLinks)}><FaBars/></button>
        </nav>
    )
}

export default Navbar