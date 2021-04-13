import React from "react";

interface Props {
  errorComponent?: React.ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return this.props.errorComponent ? this.props.errorComponent : <span>Произошла ошибка</span>;
    } else {
      return this.props.children;
    }
  }
}
