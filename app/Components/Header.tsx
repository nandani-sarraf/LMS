'use client'
import React, { FC, useState } from "react";


type Props = {
    open: boolean;
    setOpen: (open: boolean) => void;
    activeItem: number;
}
const Header: FC<Props> = (props) => {
    const [active, setActive] = useState(false);
    const [openSidebar, setOpenSidebar] = useState(false);

    if(typeof window !== "undefined"){
        window.addEventListener("scroll", () =>{
            if(window.scrollY> 80){
            setActive(true);

        }
        else {
            setActive(false);
        }
     } );
    }
    return (
        <div className="w-full relative">
           <div className={`${
            active ? "fixed top-0 left-0 w-full h-[80px] z-[80] border-b dark:border-[#ffffff1c] shadow-xl transition duration-500 dark:bg-opacity-50 dark:bg-gradient-to-b dark:from-gray-900 dark:to-black"
            : "w-full border-b dark:border-[#ffffff1c] h-[80px] z-[80] dark:shadow"
        }`}>
            {/* <div className="w-[95%] 800px:w-" */}



        </div>
           
        </div >
    )
}

export default Header;