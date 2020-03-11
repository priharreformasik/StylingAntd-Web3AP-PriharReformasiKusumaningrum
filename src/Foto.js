import React from 'react';
import './Foto.css';
import { Carousel } from 'antd';


class Foto extends React.Component {
    render(){        
        const image1 = require('./img1.jfif');
        const image3 = require('./img3.jpg');
        const image4 = require('./img4.jpg');
        return(
         <Carousel autoplay>
            <div>
                <img src={image1}/>
            </div>
            <div>
                <img src={image3}/>
            </div>
            <div>
                <img src={image4}/>
            </div>
          </Carousel>
        )
    }
}

export default Foto;