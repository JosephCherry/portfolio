import React from "react";
import './UserTextInput.css';
import TextField from '@material-ui/core/TextField';

const UserTextInput = (props) => {
    return (
        <TextField
          id={props.id}
          label={props.label}
          //className={classes.textField}
          type={props.type}
          onChange={props.onChange}
          value={props.value}
          name={props.name}
          autoComplete="current-password"
          margin="normal"
        />
    );
}
UserTextInput.defaultProps = {
    type: "text"
};

export default UserTextInput;

