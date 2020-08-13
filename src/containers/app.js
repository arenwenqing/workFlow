import React, {Component} from 'react';
import $axios from 'axios';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Flow from './flow';
import * as homeActions from '../redux/reduces/home';
import '../style/less.less';


@connect(
  state => ({home: state.home}),
  dispatch => bindActionCreators(homeActions, dispatch)
)
class App extends Component {
  state = {
  }
  componentWillMount() {
    const {initalLogo} = this.props;
    initalLogo();
  }

  componentDidMount() {
  }

  handleBrowserChange = () => {
    const {history, changeRoute} = this.props;
    changeRoute();
    history.push('/docs');
  }
  render() {
    const {home: {movelogo}} = this.props;
    return (
      <div className="home">
        <Flow />
        <div className="end-node">
          <div className="end-node-circle" />
          <div className="end-node-text">流程结束</div>
        </div>
      </div>
    );
  }
}

export default App;
