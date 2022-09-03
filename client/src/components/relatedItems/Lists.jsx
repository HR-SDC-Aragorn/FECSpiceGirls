// import React from 'react';
// import axios from 'axios';
// import Promise from 'bluebird';
// import RelatedItemCard from './RelatedItemCard.jsx';

// class Lists extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       relatedData: [],
//       styleData: [],
//       isOutfit: false,
//     };
//   }

//   componentDidUpdate() {
//     const promises = [];
//     if (this.props.related.length !== 0 && this.state.relatedData.length === 0) {
//       this.props.related.forEach((element) => {
//         promises.push(
//           axios.get('/productid', { params: { id: element } })
//             .catch((err) => {
//               console.log('error fetching product id data', err);
//             }),
//           axios.get('/styles', { params: { id: element } })
//             .catch((err) => {
//               console.log('error fetching style data', err);
//             }),
//         );
//       });
//       Promise.all(promises)
//         .then((results) => {
//           for (let i = 0; i < results.length; i += 2) {
//             this.setState((state) => ({
//               relatedData: state.relatedData.concat(results[i].data),
//               styleData: state.styleData.concat(results[i + 1].data),
//             }));
//           }
//         });
//     }
//   }

//   render() {
//     return (
//       <div id="whole-related">
//         <h2>Related Products</h2>
//         <ul>
//           {this.state.relatedData.map((product, index) => (
//             <li id="related-list">
//               <RelatedItemCard
//                 product={product}
//                 key={product.id}
//                 style={this.state.styleData[index].results}
//               />
//             </li>
//           ))}
//         </ul>
//       </div>
//     );
//   }
// }

import React, { useState } from 'react';
import axios from 'axios';
import Promise from 'bluebird';
import RelatedItemCard from './RelatedItemCard.jsx';
import ListCarousel from './styleComponents.js';

function Lists({ relatedData, styleData }) {
  const [outfitData, setOutfit] = useState([]);
  const [isLeft, setLeft] = useState(false);
  const [isRight, setRight] = useState(true);

  function leftScroll() {
    setRight(true);
    const carousel = document.getElementById('related-carousel');
    // console.log(carousel.scrollLeft);
    carousel.scrollLeft -= (carousel.scrollWidth - carousel.clientWidth);
    if (carousel.scrollLeft === 0) {
      setLeft(false);
    }
  }

  function rightScroll() {
    setLeft(true);
    const carousel = document.getElementById('related-carousel');
    carousel.scrollLeft += (carousel.scrollWidth - carousel.clientWidth);
    if (carousel.scrollLeft === (carousel.scrollWidth - carousel.clientWidth)) {
      setRight(false);
    }
  }

  return (
    <div>
      <h2>Related Products</h2>
      {isLeft && (
        <div className="left-button">
          <button type="button" className="arrow left" onClick={leftScroll}>Left Arrow</button>
        </div>
      )}
      {isRight && (
        <div className="right-button">
          <button type="button" className="arrow right" onClick={rightScroll}>Right Arrow</button>
        </div>
      )}
      <ListCarousel id="related-carousel">
        {relatedData.map((product, index) => (
          <RelatedItemCard
            product={product}
            key={product.id}
            style={styleData[index].results}
          />
        ))}
      </ListCarousel>
    </div>
  );
}

export default Lists;
