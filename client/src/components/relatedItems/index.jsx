import React from 'react';
import axios from 'axios';
import Lists from './Lists.jsx';
// eslint-disable-next-line import/extensions
// import config from '../../../../config.js';

class RelatedItems extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      related: [],
    };
  }

  componentDidMount() {
    console.log(this.props.products);
    axios.get('/related', { params: { id: this.props.currentProduct.id} })
      .then((response) => {
        let temp = [];
        console.log(response.data);
        // response.data.each((relatedId) => {
        //   axios.get('/productid', { params: { id: relatedId } })
        //     .then((res) => {
        //       temp.push(res.data);
        //     })
        //     .catch((err) => {
        //       console.log('error', err);
        //     });
        // });
        // console.log(temp);
        // this.setState({
        //   related: temp
        // });
        // this.setState({
        //   related: response.data,
        // });
      })
      .catch((err) => {
        console.log('error', err);
      });
  }

  render() {
    return (
      <div>
        <Lists products={this.props.products} />
      </div>
    );
  }
}

export default RelatedItems;
