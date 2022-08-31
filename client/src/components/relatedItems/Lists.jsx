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

  // async function getRelatedData() {
  //   const promises = [];
  //   const relatedArr = [];
  //   for (let i = 0; i < this.props.related.length; i++) {
  //     promises.push(
  //       await axios.get('/productid', { params: { id: temp[i] } })
  //         .then((res) => {
  //           relatedArr.push(res.data);
  //         })
  //         .catch((err) => {
  //           console.log('error fetching product id data', err);
  //         }),
  //     );
  //   }
  //   await Promise.all(promises)
  //   .then(() => {
  //     return relatedArr;
  //   });
  // }

  componentDidUpdate() {
    const promises = [];
    const relatedArr = [];
    const styleArr = [];
    if (this.props.related.length !== 0 && this.state.relatedData.length === 0) {
      this.props.related.forEach((element) => {
        promises.push(
          axios.get('/productid', { params: { id: element } })
            .then((res) => {
              console.log(element);
              relatedArr.push(res.data);
            })
            .catch((err) => {
              console.log('error fetching product id data', err);
            }),
          axios.get('/styles', { params: { id: element } })
            .then((styleres) => {
              console.log(element);
              styleArr.push(styleres.data);
            })
            .catch((err) => {
              console.log('error fetching style data', err);
            }),
        );
      });
      Promise.all(promises)
        .then(() => {
          console.log(relatedArr);
          console.log(styleArr);
        });
    }
  }

  render() {
    return (
      <div>
        {console.log('wow', this.state.relatedData)}
        {console.log('style', this.state.styleData)}
        <ul>
          {this.state.relatedData.map((product) => (
            <li>
              <ul>
                <RelatedItemCard product={product} key={product.id} />
              </ul>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Lists;
