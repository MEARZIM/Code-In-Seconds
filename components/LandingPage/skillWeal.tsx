import React from 'react'
import { TiHtml5 } from "react-icons/ti";
import { FaCss3Alt } from "react-icons/fa6";
import { FaJava } from "react-icons/fa6";
import { SiJavascript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { FaPhp } from "react-icons/fa6";
import { FaPython } from "react-icons/fa";
import { SiMysql } from "react-icons/si";

import './Weal.css';

const skills = [
    {
        name: "HTML",
        icons: <TiHtml5 size={55} color='white' />,
    },
    {
        name: "CSS",
        icons: <FaCss3Alt size={50} color='white' />,
    }, {
        name: "JAVASCRIPT",
        icons: <SiJavascript size={50} color='white' />,
    }, {
        name: "REACT",
        icons: <FaReact size={50} color='white' />,
    }, {
        name: "NEXTJS",
        icons: <TbBrandNextjs size={50} color='white' />,
    }, {
        name: "MONGODB",
        icons: <SiMongodb size={50} color='white' />,
    }, {
        name: "PHP",
        icons: <FaPhp size={50} color='white' />,
    }, {
        name: "PYTHON",
        icons: <FaPython size={50} color='white' />,
    }, {
        name: "JAVA",
        icons: <FaJava size={50} color='white' />,
    }, {
        name: "Mysql",
        icons: <SiMysql size={50} color='white' />,
    },
]

export const Weal = () => {
    return (
        <section className='bg-inherit h-15  w-full '>
            <div className='mx-auto overflow-hidden w-3/4 whitespace-nowrap skill-container'>
                <div className='flex justify-center items-center  '>
                    {skills.map((skill, keys) => (
                        <div key={keys} className='p-10 text-white'>
                            {skill.icons}
                        </div>
                    ))}

                </div>
                <div className='flex justify-center items-center  '>
                    {skills.map((skill, keys) => (
                        <div key={keys} className='p-10 text-white'>
                            {skill.icons}
                        </div>
                    ))}

                </div>
            </div>
        </section>
    )
}

