import React, { Component, ErrorInfo } from 'react';

interface Props {
  children: React.ReactNode;
  onRetry?: () => void;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error: ', error, errorInfo);
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h1>그림 생성에 실패했어요.</h1>
          {this.props.onRetry && (
            <button onClick={this.props.onRetry}>다시 시도</button>
          )}
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
