import React from 'react'

export const Greet = () => {
     const currentTime = new Date();
     const hours = currentTime.getHours();
     let greeting;

     if (hours < 12) {
          greeting = 'Good morning';
     } else if (hours < 18) {
          greeting = 'Good afternoon';
     } else {
          greeting = 'Good evening';
     }


     return (
          <div className='greetings'>
               <h3>{greeting}!!!</h3>
          </div>
     );
};

export default Greet;

