import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './widget.scss';
const axios = require('axios');

class Widget extends Component {

  constructor(props){
    super(props)
    this.state = {
      color: 'red'
    }
    // thiz = this
    // axios({
    //   crossDomain: true,
    //   xhrFields: {
    //       withCredentials: true
    //   },
    //   method:'get',
    //   url:'http://localhost:3000/color',
    //   dataType: 'jsonp'
    // }).then(function(response) {
    //     thiz.setState({color: response['data'] })
    // })
  }

  render() {

    return (
      <div className="docked-widget">
        <div className="widget widget">
          <div className="widget-header">
            <div style={{backgroundColor: this.state.color}}>
              creatorden
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Widget.propTypes = {};

export default Widget;
