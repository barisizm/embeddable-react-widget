import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './widget.scss';
const axios = require('axios');
import qs from 'qs';

class Widget extends Component {

  constructor(props){
    super(props)
    this.state = {
      background_color: '',
      link: ''
    }
    thiz = this;
    axios({
      method: 'post',
      url: 'http://localhost:3000/get_banner',
      data: qs.stringify({tenant_id: 1})
      })
      .then(function (response) {
        console.log(response)
          thiz.setState({
            link: response['data']['link'],
            background_color: response['data']['background_color']
          })
          console.log('this.state.background_color', thiz.state.background_color)
      })
  }

  render() {

    return (
      <div className="docked-widget">
        <div className="widget widget">
          <div className="widget-header">
            <div style={{backgroundColor: this.state.background_color}}>
            {this.state.link}
            {this.props.config['button_text']}
            {this.props.config['content']}
            {this.props.config['button_color']}
            {this.props.config['text_color']}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Widget.propTypes = {};

export default Widget;
