import React from 'react';
import classes from './Topbar.module.css';
import Logo from '../assests/stunning-logo.png';

const Topbar = () => {
    return(
        <header className={classes.Topbar}>
            <div className={classes.LogoWrapper}>
               <img className={classes.LogoImg} src={Logo} alt="Stunning Logo"/>
            </div>

            <div className={classes.NavigationBarWrapper}>
                <div className={classes.NavLinks}>
                    Home
                </div>
                <div className={classes.NavLinks}>
                    About
                </div>
                <div className={classes.NavLinks}>
                    Blog
                </div>
                <div className={classes.NavLinks}>
                    Jobs
                </div>
            </div>

            <div className={classes.AccountTab}>
                <p className={classes.Account}>Your Account</p>
            </div>
            <div className={classes.Hamburger}><i class="fas fa-bars"></i></div>
        </header>
    );
}


export default Topbar;