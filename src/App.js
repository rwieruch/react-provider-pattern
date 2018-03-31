import React from 'react';
import PropTypes from 'prop-types';

class App extends React.Component {
  render() {
    return (
      <div>
        <Headline>Hello React</Headline>

        <Paragraph>
          That's how you would use children in React
        </Paragraph>

        <SubHeadlineWithContext>
          Children and Context
        </SubHeadlineWithContext>
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

class Paragraph extends React.Component {
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

// HOC as Context Consumer (1)

const getContext = contextTypes => Component => {
  class GetContext extends React.Component {
    render() {
      return <Component { ...this.props } { ...this.context } />
    }
  }

  GetContext.contextTypes = contextTypes;

  return GetContext;
};

// Component using the HOC (1) to consume context

function SubHeadline(props) {
  return (
    <h2 style={{ color: props.coloredTheme }}>
      {props.children}
    </h2>
  );
}

const contextTypes = {
  coloredTheme: PropTypes.string
};

const SubHeadlineWithContext = getContext(contextTypes)(SubHeadline);

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
