import React, { Component } from "react";
import TextInput from './TextInput';
class TextInputManager extends Component {

    // Placeholder Generic Text Input Manager. 

    // Question? What format should the date be sent to the server with?
    constructor(props) {
        super(props);
        this.props = props;
        this.state = { value:''};
        this.handleChange = this.handleChange.bind(this);
    }



    handleChange(event) {
        
        this.setState({value: event.target.value});
        console.log(this.state.value);
    }

    // Function that sends the data to the server. 

    render() {
        return (
            <form action={this.props.dataLocation}>
            <TextInput name="Input 1" value={this.state.value} onChange={this.handleChange}/>
            </form>

            // Button that sends state data to the db. 
        );
    }
}



export default TextInputManager;