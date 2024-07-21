import React from "react";
import CallToAction from "../CallToAction/CallToAction";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import EmailIcon from '@mui/icons-material/Email';
const Footer = () => {
    return (
        <div className="h-screen bg-gradient-to-b from-[#252161] via-[#dd4a94] to-[#f8b09e] flex justify-center items-center mt-[50rem] gap-10 flex-col">
            <CallToAction text="I am Convinced ! Let's goo" styles='bg-[#252161] text-white w-[50rem] h-[10rem] rounded-xl text-xl' />
            <CallToAction text="Contact Us" styles='bg-white bg-gradient-to-b from-[#dd4a94] to-[#f8b09e] w-[20rem] h-[5rem] rounded-xl text-xl' />
            <div className="flex flex-col gap-10 -bottom-40">
                <div className="flex gap-8">
                    <FacebookIcon className="text-white scale-[2] hover:scale-[2.5]"/>
                    <InstagramIcon className="text-white scale-[2] hover:scale-[2.5]"/>
                    <XIcon className="text-white scale-[2] hover:scale-[2.5]"/>
                    <EmailIcon className="text-white scale-[2] hover:scale-[2.5]"/>
                </div>
                <p className="text-white bottom-10">© 2021 All rights reserved</p>
            </div>
        </div>
    );
}

export default Footer;