/* eslint-disable react/destructuring-assignment */
import React, { useState } from 'react';

function Styles(props) {
  return (
    <div>
      <img
        id="style-thumbnail"
        src={props.style.photos[0].thumbnail_url}
        alt={props.style.name}
        // onMouseEnter={() => this.setState({ style: this.props.style })}
        onClick={() => props.handleStyleSelect(props.style)}
      />
    </div>
  );

}

export default Styles;

{ /* <input type="checkbox" id="style-checkboxes" value={this.props.style} onChange={(e) => this.props.handleStyleSelect(e.target.value)} />
<label htmlFor="style-checkboxes">        </label> */ }
