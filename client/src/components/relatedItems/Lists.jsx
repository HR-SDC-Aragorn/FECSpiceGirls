import React from 'react';
import axios from 'axios';
import Promise from 'bluebird';
import RelatedItemCard from './RelatedItemCard.jsx';

class Lists extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      relatedData: [],
      styleData: [],
      isOutfit: false,
    };
  }

  componentDidUpdate() {
    const promises = [];
    if (this.props.related.length !== 0 && this.state.relatedData.length === 0) {
      this.props.related.forEach((element) => {
        promises.push(
          axios.get('/productid', { params: { id: element } })
            .catch((err) => {
              console.log('error fetching product id data', err);
            }),
          axios.get('/styles', { params: { id: element } })
            .catch((err) => {
              console.log('error fetching style data', err);
            }),
        );
      });
      Promise.all(promises)
        .then((results) => {
          for (let i = 0; i < results.length; i += 2) {
            this.setState((state) => ({
              relatedData: state.relatedData.concat(results[i].data),
              styleData: state.styleData.concat(results[i + 1].data),
            }));
          }
        });
    }
  }

  render() {
    return (
      <div id="whole-related">
        <h2>Related Products</h2>
        <ul>
          {this.state.relatedData.map((product, index) => (
            <li id="related-list">
              <RelatedItemCard
                product={product}
                key={product.id}
                style={this.state.styleData[index].results}
              />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Lists;
