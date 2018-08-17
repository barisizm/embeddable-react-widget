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
      data: qs.stringify({tenant_id: this.props.config['tenant_id']})
      })
      .then(function (response) {
        console.log(response)
          thiz.setState({
            link: response['data']['link'],
            background_color: response['data']['background_color'],
            button_text: response['data']['button_text'],
            content: response['data']['content'],
            button_color: response['data']['button_color'],
            text_color: response['data']['text_color']
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
              <a href={this.state.link} class="button" style={{backgroundColor: this.state.button_color}}>{this.state.button_text}</a>
              {this.state.content}
              {this.state.text_color}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Widget.propTypes = {};

export default Widget;
