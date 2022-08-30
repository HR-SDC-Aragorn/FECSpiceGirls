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
      styles: [],
    };
  }

  componentDidUpdate() {
    if (this.props.currentProduct.id !== undefined && this.state.related.length === 0) {
      axios.get('/related', { params: { id: this.props.currentProduct.id} })
        .then((response) => {
          console.log('first', response.data);
          for (let i = 0; i < response.data.length; i++) {
            axios.get('/productid', { params: { id: response.data[i] } })
              .then((res) => {
                console.log('second', res.data);
                this.setState((state) => ({
                  related: state.related.concat(res.data),
                }));
              })
              .catch((err) => {
                console.log('error fetching product id data', err);
              });
            // axios.get('/styles', { params: { id: response.data[i] } })
            //   .then((styleres) => {
            //     console.log('style', styleres.data);
            //     this.setState((state) => ({
            //       related: state.styles.concat(styleres.data),
            //     }));
            //   })
            //   .catch((err) => {
            //     console.log('error fetching style data', err);
            //   });
          }
        })
        .catch((err) => {
          console.log('error fetching related data', err);
        });
    }
  }
  // componentDidMount() {
  //   console.log(this.props.products);
  //   axios.get('/related', { params: { id: this.props.currentProduct.id} })
  //     .then((response) => {
  //       let temp = [];
  //       console.log(response.data);
  //       response.data.each((relatedId) => {
  //         axios.get('/productid', { params: { id: relatedId } })
  //           .then((res) => {
  //             temp.push(res.data);
  //           })
  //           .catch((err) => {
  //             console.log('error', err);
  //           });
  //       });
  //       console.log(temp);
  //       this.setState({
  //         related: temp
  //       });
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
        <Lists related={this.state.related} />
      </div>
    );
  }
}

export default RelatedItems;
