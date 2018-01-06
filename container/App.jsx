import React, {Component} from 'react';
import { connect } from 'react-redux';

import InputPreview from '../components/InputPreview.jsx'
import { setMessage } from '../actions/message'

class App extends Component {

  _onChange = (value) => {
    this.props.dispatch(setMessage(value))
  }

  render() {
    const {message} = this.props.messageReducer;
    return (
      <div>
        <InputPreview
          value={message}
          onChange={this._onChange}
        />
      </div>
    );
  }
}

export default connect(state =>state)(App);
