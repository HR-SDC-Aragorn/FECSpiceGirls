import React from 'react';
import RelatedItemCard from './RelatedItemCard.jsx';

class Lists extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOutfit: false,
    };
  }

  render() {
    return (
      <div>
        {console.log('wow', this.props.related)}
        <ul>
          {this.props.related.map((product) => (
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
