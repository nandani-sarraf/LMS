'use client'
import { Props } from "next/dist/client/script";
import React,{FC,use,useState} from "react";
import Heading from "./utils/Heading";
import Header from './Components/Header';


interface Propes{}

  const Page: FC<Props> = (props) => {
    const [open,setOpen] =useState(false);
    const [activeItem,setActiveItem]= useState(0);
    return (
      
      <div>
        <Heading 
        title= "ELearning"
        description ="ELearning is a platform for students to learn and get help from teachers"
        keywords ="Programmming,MERN, Redux,Machine Learning"
        />
        <Header 
        open= {open}
        setOpen={setOpen}
        activeItem={activeItem}
        />
      </div>
    )
  };
  

  export default Page;
