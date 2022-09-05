// import React from 'react';
// import axios from 'axios';
// import Lists from './Lists.jsx';

// class RelatedItems extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       related: [],
//       // styles: [],
//     };
//   }

//   componentDidUpdate(prevProps) {
//     // console.log('prev', prevProps);
//     const temp = this.props.currentProduct;
//     if (temp !== prevProps && this.state.related.length === 0) {
//       axios.get('/related', { params: { id: temp.id } })
//         .then((response) => {
//           // console.log('first', response.data);
//           this.setState({
//             related: response.data,
//           });
//         })
//         .catch((err) => {
//           console.log('error fetching related data', err);
//         });
//     }
//   }

//   render() {
//     return (

//       <div>
//         <Lists related={this.state.related} />
//         {/* <div id="test">
//         </div> */}
//       </div>
//     );
//   }
// }

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Promise from 'bluebird';
import Lists from './Lists.jsx';

function RelatedItems({products, currentProduct}) {
  const [relatedData, setRelated] = useState([]);
  const [styleData, setStyles] = useState([]);

  const getData = async () => {
    const related = await axios.get('/related', { params: { id: currentProduct.id } });
    const tempRelated = Promise.all(related.data.map((element) => axios.get('/productid', { params: { id: element } })));
    const tempStyle = Promise.all(related.data.map((element) => axios.get('/styles', { params: { id: element } })));
    const info = await Promise.all([tempRelated, tempStyle]);
    const tempInfo = [];
    const tempS = [];
    for (let i = 0; i < info[0].length; ++i) {
      tempInfo.push(info[0][i].data);
    }
    for (let i = 0; i < info[1].length; ++i) {
      tempS.push(info[1][i].data);
    }
    setRelated(tempInfo);
    setStyles(tempS);
  };

  useEffect(() => {
    getData();
  }, [currentProduct]);

  return (
    <div>
      <Lists relatedData={relatedData} styleData={styleData} />
    </div>
  );
}

export default RelatedItems;
