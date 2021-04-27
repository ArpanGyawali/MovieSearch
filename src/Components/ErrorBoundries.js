import React from 'react';

class ErrorBoundries extends React.Component {
	constructor(props) {
		super(props) 
		this.state = {
			hasError: false
		}
	}
	

	componentDidCatch(error, info) {	//new lifecycle method
		this.setState({
			hasError: true
		})
	} 

	render() {
		if (this.state.hasError) {
			return <h1>Something went wrong in this section</h1>
		}	
		return this.props.children
	}
}

export default ErrorBoundries;
