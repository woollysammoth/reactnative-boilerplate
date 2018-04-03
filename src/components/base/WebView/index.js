import React, { Component } from 'react';
import { WebView } from 'react-native';

class AWWebView extends Component {
  render() {
    return (
      <WebView
        source={{uri: source}}
      />
    );
  }
}

AWWebView.propTypes = {
  source: PropTypes.string.isRequired,
};

export default AWWebView;