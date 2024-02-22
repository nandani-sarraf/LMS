'use client'
import React,{FC, useState} from "react";


type Propes= {
    open: boolean;
    setOpen: (open:boolean) => void;
    activeItem:number;
}
const Header : FC<Propes>=(props) =>{
    const [open,setOpen] =useState(false);
    const [activeItem,setActiveItem]= useState(0);
    return (
        <div className="w-full-relative">
            <div className='${}'></div>
           
        </div>
    )
}

export default Header;