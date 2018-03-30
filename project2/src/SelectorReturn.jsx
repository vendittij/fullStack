import React, { Component } from 'react';

class SelectorReturn extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);

  }

  handleChange(event) {
    this.props.onChange(event.target.value);
  }

  render() {
    return (
        <label>
          <input type="text" value={this.props.value}
          placeholder={this.props.placeholder} onChange={this.handleChange} />
        </label>
    );
  }
}
export default SelectorReturn
