import React from "react";
import logo from "/logo.png";
import { PropagateLoader } from "react-spinners";

const PreLoader: React.FC = () => {
    return (
        <div className="flex flex-col justify-center items-center mt-[350px]">
            <div>
                <img src={logo} alt="Logo" />
            </div>
            <PropagateLoader size={25} color="#0070FF" />
        </div>
    );
};

export default PreLoader;
