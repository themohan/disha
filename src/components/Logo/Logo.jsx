import React from 'react';
import DishaLogo from '../../assets/dishaTransparent.png';

export default class Logo extends React.Component {
    render() {
        return(
            <img src={DishaLogo} height={this.props.height} width={this.props.width} />
        );
    }
}