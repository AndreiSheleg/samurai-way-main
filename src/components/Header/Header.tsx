import React from "react";
import s from './Header.module.css'
import logo from "../../assets/images/logo.svg"


function Header () {
    return (
        <header className={s.header}>
            <img src={logo} alt='logo-img'/>
        </header>
    )
}

export default Header