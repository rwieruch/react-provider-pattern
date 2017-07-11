import React, { Component } from 'react';
import PropTypes from 'prop-types';

class App extends Component {
  render() {
    return (
      <div>
        <Headline>Hello React</Headline>
        <Paragraph>
          That's how you would use children in React
        </Paragraph>
      </div>
    );
  }
}

// (Functional Sateless Component) Context Consumer

function Headline(props, context) {
  const { coloredTheme } = context;
  return (
    <h1 style={{ color: coloredTheme }}>
      {props.children}
    </h1>
  );
}

Headline.contextTypes = {
  coloredTheme: PropTypes.string
};

// (ES Class Component) Context Consumer

class Paragraph extends Component {
  render() {
    const { coloredTheme } = this.context;
    return (
      <p style={{ color: coloredTheme }}>
        {this.props.children}
      </p>
    );
  }
}

Paragraph.contextTypes = {
  coloredTheme: PropTypes.string
};

// Provider

class ThemeProvider extends React.Component {
  getChildContext() {
    return {
      coloredTheme: this.props.coloredTheme
    };
  }

  render() {
    return <div>{this.props.children}</div>;
  }
}

ThemeProvider.childContextTypes = {
  coloredTheme: PropTypes.string
};

export {
  ThemeProvider,
};

export default App;
