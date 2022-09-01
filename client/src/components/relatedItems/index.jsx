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
        {/* <div id="test">
        </div> */}
      </div>
    );
  }
}

export default RelatedItems;
