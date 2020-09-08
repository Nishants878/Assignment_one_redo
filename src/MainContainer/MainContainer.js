import React from 'react';
import classes from '../MainContainer/MainContainer.module.css';
import LeftSegment from '../LeftSegment/LeftSegment';
import RightSegment from '../RightSegment/RightSegment';

const MainContainer = () => {
    return(
       
       <section className={classes.MainSection}>
           <LeftSegment/>
         <RightSegment/>
       </section>
    )
}
export default MainContainer;
