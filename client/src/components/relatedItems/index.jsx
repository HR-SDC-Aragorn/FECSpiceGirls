import React from 'react';
import axios from 'axios';

class RelatedItems extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // related: [],
    };
  }

  componentDidMount() {
    // const apiUrl = process.env.REACT_APP_API_HOST;
    // const apiKey = process.env.REACT_APP_API_KEY;
    const options = {
      method: 'get',
      url: process.env.REACT_APP_API_HOST,
      headers: {
        Authorization: process.env.REACT_APP_API_KEY,
      },
    };
    axios(options)
      .then((data) => (
        console.log(data)
      ))
      .catch((err) => (
        console.log('error getting', err)
      ));
  }

  render() {
    return (
      <div>
        Hello
        {/* {this.state.related} */}
      </div>
    );
  }
}

export default RelatedItems;
