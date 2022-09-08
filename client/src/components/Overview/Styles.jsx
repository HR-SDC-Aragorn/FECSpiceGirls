/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/destructuring-assignment */
import React from 'react';

function Styles(props) {
  if (!props.style.photos[0].thumbnail_url) {
    return (
      <div>
        <img
          id="style-thumbnail"
          src="https://whetstonefire.org/wp-content/uploads/2020/06/image-not-available.jpg" alt=""
          // onMouseEnter={() => this.setState({ style: this.props.style })}
          onClick={() => props.handleStyleSelect(props.style)}
        />
      </div>
    );
  }
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
