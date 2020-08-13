import React, {Component} from 'react';

class AddNode extends Component {
  state = {
  }
  render() {
    return (
      <div className="add-node-btn-box">
        <div className="add-node-btn">
          <span>
            <button className="btn">+</button>
          </span>
        </div>
      </div>
    );
  }
}
export default AddNode;
