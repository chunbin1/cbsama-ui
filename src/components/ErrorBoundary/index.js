import React, { Component } from 'react';

class ErrorBoundary extends Component {
  static getDerivedStateFromError() {
    return { hasError: true };
  }

  state = {
    hasError: false,
  };

  componentDidCatch(error, info) {
    // reportError(error, info);
  }

  render() {
    const { hasError } = this.state;
    const { children, message = '图片显示异常' } = this.props;
    if (hasError) {
      return <div>{message}</div>;
    }
    return children;
  }
}

export default ErrorBoundary;
