import React from 'react';
import Card from './Card';

function Main() {
  return (
    <div className="listOfCards">
      <Card name = 'Andra'
            email = 'andra@gmail.com'
            pic = 'https://www.w3schools.com/howto/img_avatar.png'
            job = 'Project Manager' />
      <Card name = 'Berlianita'
            email = 'berlianita@gmail.com'
            pic = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTiTfDB2m-ODmoaxZwiSgiDv4WxnmAAfoj5RJ5LTV_f6AXb8Iky'
            job = 'Analyst' />
      <Card name = 'Cyntia'
            email = 'cyntia@gmail.com'
            pic = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRsT1CPd3M3eag-fBWIhmPTh9XtnVd-YYzvHAv-A5L3Y8T8WRc0'
            job = 'Frontend Developer' />
    </div>
    
  );
}

export default Main;
