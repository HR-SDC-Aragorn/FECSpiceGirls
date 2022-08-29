import React from 'react';
import axios from 'axios';
import Lists from './Lists.jsx';
// eslint-disable-next-line import/extensions
// import config from '../../../../config.js';

class RelatedItems extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      reviews: [],
    };
  }

  // componentDidMount() {
  //   axios.get('/products')
  //     .then((response) => {
  //       console.log(response.data);
  //       this.setState({
  //         related: response.data,
  //       });
  //     })
  //     .catch((err) => {
  //       console.log('error', err);
  //     });
  // }

  render() {
    return (
      <div>
        <Lists products={this.props.products} />
      </div>
    );
  }
}

export default RelatedItems;
