import React, { Component } from "react";

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            errorInfo: null
        }
    }

    componentDidCatch = (error, errorInfo) => {
        console.log('componentDidCatch', errorInfo.componentStack);
        this.setState({
            error: error,
            errorInfo: errorInfo
        })
    }

//You should notice that the errorBoundary is rendering the error 
//information in the html page for a second then it will be overwritten 
//and it happens only under development mode 
//we should not have this in production after we build our App "supposedly, we need to check"
    render() {
        if (this.state.errorInfo){
            // Error path
            return (
                <div>
                    <h3>Something went wrong.</h3>
                    <details style={{ whiteSpace: 'pre-wrap' }}>
                        {this.state.error && this.state.error.toString()}
                        <br />
                        <div style={{textAlign: 'left', display: 'inline-block'}}>
                            {this.state.errorInfo.componentStack}
                        </div>
                    </details>
                </div>
            );
        }
        // Normally, just render children
        return this.props.children;
    }
}

export default ErrorBoundary;