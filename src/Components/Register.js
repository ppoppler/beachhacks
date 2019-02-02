import React, { Component } from 'react';
import { ReactTypeformEmbed } from 'react-typeform-embed';
export default class Register extends Component {

  constructor(props) {
    super(props);
    this.openForm = this.openForm.bind(this);
  }

  openForm() {
    this.typeformEmbed.typeform.open();
  }


  render() {
    return (
      <div className='typeform-popup'>
        <ReactTypeformEmbed
          popup
          hideHeaders
          hideFooters
          url="https://beachhacks.typeform.com/to/LGUC4U"
          ref={tf => { this.typeformEmbed = tf }}
          style={{ top: 100 }}
        />
        <div className="registration" onClick={this.openForm}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

