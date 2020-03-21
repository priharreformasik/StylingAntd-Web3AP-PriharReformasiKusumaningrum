import React from 'react';
import { Card, Button} from 'antd';
import Header from './Header';
import { LikeFilled, DislikeFilled} from '@ant-design/icons';
const { Meta } = Card;
  
class Counter extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      like : 0
    }
  }
  handleLike = () => {
    this.setState({
      like: this.state.like + 1
    })
  }

  handleDislike = () => {
    if(this.state.like > 0) {
      this.setState({
        like: this.state.like - 1
      })
    }
  }

  render() {
    const {nama, foto, status, web} = this.props;
    return (
    <Card title={nama} bordered={false}
    extra={
    <Header like={this.state.like}></Header>
    }>
        <Card cover={<img alt="quote" src={foto}/>} >
            <div className="counter">                  
            <Button type="primary" danger onClick={this.handleDislike} icon={<DislikeFilled />} />
            <Button style={{ marginLeft: "5px"}} type="primary" onClick={this.handleLike} icon={<LikeFilled />} /> 
            <div style={{ float:"right"}}>{this.state.like} likes</div>             
            </div> 
            <br></br>
            <Meta title={status} description={web} />
        </Card>   
    </Card>      
    );
  }
}

export default Counter;