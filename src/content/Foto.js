import React from 'react';
import '../content/Foto.css';
import { Carousel } from 'antd';


class Foto extends React.Component {
    render(){        
        const image1 = require('../image/1.png');
        const image3 = require('../image/3.png');
        const image4 = require('../image/4.png');
        return(
         <Carousel autoplay>
            <div>
                <img alt="slide 1" src={image1}/>
            </div>
            <div>
                <img alt="slide 2" src={image3}/>
            </div>
            <div>
                <img alt="slide 3" src={image4}/>
            </div>
          </Carousel>
        )
    }
}

export default Foto;