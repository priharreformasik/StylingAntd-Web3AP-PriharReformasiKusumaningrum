import React from 'react';
import '../content/Kartu.css';
import Counter from '../content/Counter';
import { Col, Row  } from 'antd';

class  Kartu extends React.Component {
  constructor(probs){
    super(probs);
    this.state = {
      cardData: [
        {
          foto : require('../image/quote1.jpg'),
          nama:"Fancy Fantacy",
          web: "fancyfantacy.com",
          status : "Growth is a process"
        },
        {
          foto : require('../image/quote2.jpg'),
          nama: "Tone It Up",
          web: "toneitup.com",
          status : "Note to self"
        },
        {
          foto : require('../image/quote3.jpg'),
          nama : "Woman's Day",
          web: "womansday.com",
          status  : "Inspirational Quote"
        },
      ]
    }
  }

  render(){    
    return (
      <div className="site-card-wrapper">        
        <Row gutter={16}>
          {
            this.state.cardData
            .map((data, index) => (
              <Col key={index} span={8}>                  
                <Counter nama={data.nama} status={data.status} foto={data.foto} web={data.web} />
              </Col>
            ))
          }
        </Row>
      </div>
    );
  }
}

export default Kartu;