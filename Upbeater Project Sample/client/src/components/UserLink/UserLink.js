import React from "react";
import Button from "@material-ui/core/Button"

const UserLink = (props) => {
    return (
        <nav>
            <Button
                className="focusVisible"
                href={props.href}
                variant={props.variant}
                disableRipple
                disableFocusRipple
            >
                {props.value}
            </Button>
        </nav>
    );
};

UserLink.defaultProps = {
    variant: "text"
}

export default UserLink;