/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/destructuring-assignment */
import React from 'react';

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
