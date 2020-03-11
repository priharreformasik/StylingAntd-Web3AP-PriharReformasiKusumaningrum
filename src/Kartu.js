import React from 'react';
import './Content.css';
import { Card, Col, Row } from 'antd';

const cardData =[
  {
    nama:"Andra",
    email: "andra@gmail.com",
    job : "Software Engineer"
  },
  {
    nama: "Bella",
    email: "bella@gmail.com",
    job : "Backend Developer"
  },
  {
    nama : "Citra",
    email: "citra@gmail.com",
    job  : "UI/UX"
  }
]
class  Kartu extends React.Component {
  render(){
    return (
      <div className="site-card-wrapper">
        
        <Row gutter={16}>
          {cardData.map(data =>
        <Col span={8}>
            <Card title={data.nama} bordered={false} className="inside">
                <div>{data.email}</div>
                {data.job}
            </Card>
        </Col>
          )}
        </Row>
      </div>
    );
  }
}

export default Kartu;