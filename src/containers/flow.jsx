import React, {Component} from 'react';
import AddNode from './addNode';

const data = require('./mock.json');

class Flow extends Component {
  state = {
    data: data.data.nodeConfig
  }
  NodeWrap = (nodeData) => {
    if (nodeData.type !== 4) {
      return (
        <div>
          <div className="node-wrap">
            <div className={nodeData.type === 0 ? 'node-wrap-box start-node' : 'node-wrap-box'}>
              <div
                className="title"
              >
                {nodeData.nodeName}
              </div>
            </div>
            <AddNode />
          </div>
          {nodeData.childNode && this.NodeWrap(nodeData.childNode)}
        </div>
      );
    }
    if (nodeData.type === 4) {
      return (
        <div>
          <div className="branch-wrap">
            <div className="branch-box-wrap">
              <div className="branch-box">
                <button className="add-branch">添加条件</button>
                {
                  nodeData.conditionNodes.map((item, i) => (
                    <div className="col-box" key={i}>
                      <div className="condition-node">
                        <div className="condition-node-box">
                          <div className="auto-judge">
                            <div className="title-wrapper">
                              <span className="editable-title" />
                              <i className="anticon anticon-close close" />
                            </div>
                            <div className="content">111</div>
                          </div>
                          <AddNode />
                        </div>
                      </div>
                      {item.childNode && this.NodeWrap(item.childNode)}
                      {
                        i === 0 ? <div className="top-left-cover-line" /> : ''
                      }
                      {
                        i === 0 ? <div className="bottom-left-cover-line" /> : ''
                      }
                      {
                        i === nodeData.conditionNodes.length - 1 ? <div className="top-right-cover-line" /> : ''
                      }
                      {
                        i === nodeData.conditionNodes.length - 1 ? <div className="bottom-right-cover-line" /> : ''
                      }
                    </div>
                  ))
                }
              </div>
              <AddNode />
            </div>
          </div>
          {nodeData.childNode && this.NodeWrap(nodeData.childNode)}
        </div>
      );
    }
  }
  render() {
    return (
      <div>
        {this.NodeWrap(this.state.data)}
      </div>
    );
  }
}
export default Flow;
