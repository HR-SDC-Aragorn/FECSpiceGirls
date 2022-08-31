import React from 'react';
import axios from 'axios';
import Lists from './Lists.jsx';

class RelatedItems extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      related: [],
      // styles: [],
    };
  }

  componentDidUpdate(prevProps) {
    // console.log('prev', prevProps);
    const temp = this.props.currentProduct;
    if (temp !== prevProps && this.state.related.length === 0) {
      axios.get('/related', { params: { id: temp.id } })
        .then((response) => {
          // console.log('first', response.data);
          this.setState({
            related: response.data,
          });
          // for (let i = 0; i < response.data.length; i++) {
          //   axios.get('/productid', { params: { id: response.data[i] } })
          //     .then((res) => {
          //       console.log('second', res.data);
          //       this.setState((state) => ({
          //         related: state.related.concat(res.data),
          //       }));
          //     })
          //     .catch((err) => {
          //       console.log('error fetching product id data', err);
          //     });
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
          // }
        })
        .catch((err) => {
          console.log('error fetching related data', err);
        });
    }
  }

  render() {
    return (

      <div>
        <Lists related={this.state.related} />
        <div id="test">
          Hello
        </div>
      </div>
    );
  }
}

export default RelatedItems;
