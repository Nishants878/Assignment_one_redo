import React from 'react';
import classes from '../RightSegment/RightSegment.module.css';
import Illustration from '../assests/landing-section-image.png';



const RightSegment = () => {
    return(
       
      <div className={classes.RightMegaWrapper}>
              <div className={classes.ImgageContainer}>
                  <img className={classes.Illustration} src={Illustration} alt="A boy skating"/>
              </div>
      </div>
    )
}
export default RightSegment;