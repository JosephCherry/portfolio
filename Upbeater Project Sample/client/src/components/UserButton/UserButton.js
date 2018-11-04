import React from "react";
import "./UserButton.css";
import Button from '@material-ui/core/Button';

const UserButton = (props) => {
    return (
        <div className="UserButton">
            <Button
                type={props.type}
                color={props.color}
                onClick={props.onClick}
                disabled={props.disabled}
                variant="contained"
            >
                {props.text}      
            </Button>
        </div>

    );
}
UserButton.defaultProps = {
    color : 'primary'
}

export default UserButton;
