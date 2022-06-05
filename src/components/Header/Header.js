import React from 'react';
import css from './Header.module.css'
import logo from './images/img_logo.webp'

const Header = () => {
    return (
        <div className={css.header}>
            <img className={css.logo} src={logo} alt="logo"/>
            <h1>Film Search Service Premium</h1>
            <div className={css.user}>
                <h1 className={css.name}>Ihor Khlopotin</h1>
                <h1 className={css.gmail}>ihor.khlopotin@gmail.com</h1>
            </div>
        </div>
    );
};

export default Header;