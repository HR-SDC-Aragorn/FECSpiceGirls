import React from 'react';

function RelatedItemCard(props) {
  return (
    <div>
      <li>
        {props.product.category}
      </li>
      <li>
        {props.product.name}
      </li>
      <li>
        {props.product.default_price}
      </li>
    </div>
  );
}

export default RelatedItemCard;
