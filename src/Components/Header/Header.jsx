import React from "react";
import {motion} from 'framer-motion';
import Logo from "../../assets/webpImages/logo.webp";
import CallToAction from "../CallToAction/CallToAction";
const Header = () => {
    return (
        <div className="header fixed top-0 w-full flex justify-between items-center p-4 bg-opacity-0 backdrop-blur-sm z-[1000]">
            <motion.div
                className='bg-white w-28 h-28 shadow-lg rounded-full items-center justify-center flex hover:cursor-pointer'
                whileHover={{
                    scale: 1,
                    rotate: 360,
                }}
            >
                <img src={Logo} alt='logo' width={100} height={100} />
            </motion.div>
            <CallToAction text="Sign Up" styles="bg-amber-500 text-[#252161]"/>
        </div>
    )
}

export default Header;