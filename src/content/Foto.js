import React from 'react';
import '../content/Foto.css';
import { Carousel, Layout } from 'antd';


class Foto extends React.Component {
    render(){        
        const image1 = require('../image/1.png');
        const image3 = require('../image/3.png');
        const image4 = require('../image/4.png');
        return(
            <div>
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
          
                <Layout style={{padding:30}}>
                    <div style={{fontSize:50}}>
                        <h1><b>About Me</b></h1>
                    </div>
                    <div>
                        <h2>
                            My name is Prihar Reformasi Kusumaningrum, I'm from Purworejo. <br></br>
                            I'm studying software engineering at Gadjah Mada University.
                        </h2>
                    </div>
                </Layout>
            </div>
          
        )
    }
}

export default Foto;