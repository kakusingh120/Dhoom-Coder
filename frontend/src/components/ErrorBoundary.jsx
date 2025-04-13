import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    console.error("Caught in getDerivedStateFromError:", error); // Now it's used
    return { hasError: true };
  }
  
  componentDidCatch(error, info) {
    console.error("Error caught in Error Boundary:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return <h2>Something went wrong. Please refresh the page.</h2>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
