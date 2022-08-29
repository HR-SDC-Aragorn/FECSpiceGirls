import React from 'react';
import RelatedItemCard from './RelatedItemCard.jsx';

class Lists extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOutfit: false,
    }
  }

  render() {
    return (
      <div>
        <ul>
          {this.props.products.map((product, key) =>
            <li>
              <ul>
                <RelatedItemCard product={product} key={product.id} />
              </ul>
            </li>)}
        </ul>
      </div>
    );
  }
}

export default Lists;
