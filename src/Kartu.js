import React from 'react';
import './Content.css';
import { Card, Col, Row, Button, Input } from 'antd';
import { PlusOutlined, MinusOutlined, HeartTwoTone, HeartOutlined} from '@ant-design/icons';

const { Meta } = Card;

const cardData =[
  {
    foto : require('../src/image/quote1.jpg'),
    nama:"Fancy Fantacy",
    email: "fancyfantacy.com",
    job : "Growth is a process"
  },
  {
    foto : require('../src/image/quote2.jpg'),
    nama: "Tone It Up",
    email: "toneitup.com",
    job : "Note to self"
  },
  {
    foto : require('../src/image/quote3.jpg'),
    nama : "Woman's Day",
    email: "womansday.com",
    job  : "Inspirational Quote"
  }
]
class  Kartu extends React.Component {
  state = {
    order:4
  }

  handlePlus = () => {
    this.setState({
      order : this.state.order + 1
    })
  }

  handleMinus = () => {
    if(this.state.order > 0) {
      this.setState({
        order : this.state.order - 1
      })
    }
  }
  render(){    
    const like = require('../src/image/like.png');
    return (
      <div className="site-card-wrapper">
        
        <Row gutter={16}>
          {cardData.map(data =>
        <Col span={8}>
            <Card title={data.nama} bordered={false} className="card-layot" 
            extra={
              <div className="likes">
                <img src={like}></img>
                <div className="count">{this.state.order}</div>
                {/* <Button type="primary" shape="circle" className="count">{this.state.order}</Button> */}
              </div>
            }>
              <div className="likes">
                <img src=""></img>
                <div className="count"></div>
              </div>
              <Card cover={<img src={data.foto}/>} >
                <div className="counter">                  
                  <Button type="primary" danger onClick={this.handleMinus} className="minus" icon={<MinusOutlined />} /> 
                  <Input type="text" value={this.state.order}/>
                  <Button type="primary" onClick={this.handlePlus} className="plus" icon={<PlusOutlined />} />              
                </div> 
                <br></br>
                <Meta title={data.job} description={data.email} />
              </Card>            
                             
            </Card>
        </Col>
          )}
        </Row>
      </div>
    );
  }
}

export default Kartu;