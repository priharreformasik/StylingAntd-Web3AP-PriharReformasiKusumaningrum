import React from 'react';
import '../content/Kartu.css';

class Header extends React.Component {
    render(){
        const { like } = this.props;
        const likes = require('../image/like.png');
        return (
              <div className="likes">
                <img alt="icon heart" src={likes}></img>
                <div >{like}</div>
                {/* <Button type="primary" shape="circle" className="count">{this.state.order}</Button> */}
              </div>
    )}
}

export default Header;