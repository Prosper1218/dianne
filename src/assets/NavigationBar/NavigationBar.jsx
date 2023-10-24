import React from 'react'
import './Nav.css';
import { useState } from "react";
import { Menu, Title, } from '@mantine/core';
import { Link, NavLink } from "react-router-dom";
import logo from "../../IMAGES/diannalogo.svg";
import { links } from '../Data';
import { motion } from 'framer-motion';

const NavigationBar = () => {
    const [active, setactive] = useState("menu")
    const [icon, seticon] = useState("icon")

    const togglenav = () => {

        active === "menu" ? setactive("menu active") : setactive("menu")
        icon === "icon" ? seticon("icon icon2") : seticon("icon")
    }




    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{delay:0.2}}

        >
            <div >
                <nav id='nav' >
                    <Link to={"/"} id='Bcontainer'><img src={logo} alt="" className='w-[1.5rem]' /> <h2 id='brandName'>Dianne Russell</h2></Link>
                    <ul className={active} style={{ alignItems: "center" }}>
                        {links.map((link) => {
                            return <NavLink key={link.id} to={link.to} className={({ isActive, isPending }) => isActive ? "active-link" : null} >
                                {link.name}
                            </NavLink>
                        })}

                    </ul>

                    <div onClick={togglenav} id='btn'><Icon /></div>

                </nav>
                {/* <Mymenu /> */}
            </div>
        </motion.div>
    )
}


import { useDisclosure } from '@mantine/hooks';
import { Burger } from '@mantine/core';


const Icon = () => {



    const [opened, { toggle }] = useDisclosure(false);
    const label = opened ? 'Close navigation' : 'Open navigation';
    return <Burger opened={opened} onClick={toggle} aria-label={label} id='burg' />;

}

export default NavigationBar




// px-4 py-2 items-center rounded-sm pointer