import React from "react";
import {
    BsFacebook,
    BsGithub,
    BsLinkedin,

} from "react-icons/bs";
import { SiGmail } from "react-icons/si";

const ContactButton: React.FC = () => {
    return (
        <div>
            <div className="flex flex-wrap mt-4 gap-x-8 text-4xl">
                <a
                    target="_blank"
                    href="https://www.facebook.com/Itsshafimiazi"
                >
                    <BsFacebook className="text-white hover:bg-primary-400 duration-500 hover:scale-125 rounded-full " />
                </a>
                <a target="_blank" href="https://github.com/safimiazi">
                    <BsGithub className="text-white hover:bg-primary-400 duration-500 hover:scale-125 rounded-full " />
                </a>
           
                <a
                    target="_blank"
                    href="https://www.linkedin.com/in/mohebulla-miazi-68631624b/"
                >
                    <BsLinkedin className="text-white hover:bg-primary-400 duration-500 hover:scale-125 rounded-full " />
                </a>
                <a target="_blank" href="mailto:mohibullamiazi@gmail.com">
                    <SiGmail className="text-white hover:bg-primary-400 duration-500 hover:scale-125 rounded-full " />
                </a>
            </div>

          
        </div>
    );
};

export default ContactButton;
