import React from 'react';
import classes from '../LeftSegment/LeftSegment.module.css';
import ArrowUP from '../assests/arrow-up.png';
import ArrowDown from '../assests/arrow-down.png';
import GrayTick from '../assests/tick-gray.png';
import UserPink from '../assests/user-pink.png';
import USerRed from '../assests/user-red.png';
import USerBlue from '../assests/user-blue.png';
import USerOrange from '../assests/user-orange.png';
import BlueTick from '../assests/tick-blue.png';

const LeftSegment = () => {
    return(
       
       <div className={classes.LeftMegaWrapper}>
           <div className={classes.TopContentWrapper}>
               <h1 className={classes.Heading}>
                   Stunning Workplace<span className={classes.PurpleDot}>.</span>
               </h1>
               <p className={classes.Info}>
                   With Stunning, remote teams can oraganize projects,
                   manage shifting priorities, and get work done.
               </p>

               <div className={classes.Innernavigation}>
                 <div className={classes.PurpleWrapper}>
                    <p className={classes.AccountTwo}>New Account</p> 
                 </div>
                 <div className={classes.UpWrapper}>
                     <img className={classes.ArrowUP} src={ArrowUP} alt="up arrow"/>
                 </div>
                 <div className={classes.DownWrapper}>
                     <img className={classes.ArrowDown} src={ArrowDown} alt="Down arrow"/>
                 </div>

               </div>
           </div>


           <div className={classes.BottomContentWrapper}>
               <div className={classes.FunctionWrapper}>

                   <div className={classes.Function}>
                        <img className={classes.GrayTick} src={GrayTick} alt="Gray Tick"/>
                        <p className={classes.FuncName}>Dmm design</p>
                        <img className={classes.UserPink} src={UserPink} alt="Pink user"/>
                        <p className={classes.Date}>20 Dec</p>
                        <div className={classes.ColorCodePink}> </div>
                   </div>
                   <div className={classes.FunctionBlue}>
                        <img className={classes.BlueTick} src={BlueTick} alt="Blue Tick"/>
                        <p className={classes.FuncName}>Blurr animation</p>
                        <img className={classes.UserPink} src={USerOrange} alt="Yellow user"/>
                        <p className={classes.Date}>22 Dec</p>
                        <div className={classes.ColorCodeYellow}> </div>
                   </div>
                   <div className={classes.Function}>
                        <img className={classes.GrayTick} src={GrayTick} alt="Gray Tick"/>
                        <p className={classes.FuncName}>Illustration</p>
                        <img className={classes.UserPink} src={USerBlue} alt="Blue user"/>
                        <p className={classes.Date}>26 Dec</p>
                        <div className={classes.ColorCodeBlue}> </div>
                   </div>
                   <div className={classes.Function}>
                        <img className={classes.GrayTick} src={GrayTick} alt="Gray Tick"/>
                        <p className={classes.FuncName}>Refunds</p>
                        <img className={classes.UserPink} src={USerRed} alt="Orange user"/>
                        <p className={classes.Date}>28 Dec</p>
                        <div className={classes.ColorCodeOrange}> </div>
                   </div>


               </div>
           </div>
       </div>
    )
}
export default LeftSegment;
