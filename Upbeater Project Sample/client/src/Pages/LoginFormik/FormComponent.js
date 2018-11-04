import React from "react";
import { Button, TextField } from "@material-ui/core";


export const FormComponent = (props) => {

    const {
        values: { name, email, password, confirmPassword },
        errors,
        touched,
        // handleSubmit,
        handleChange,
        isValid,
        setFieldTouched
    } = props;

    const change = (field, e) => {
        handleChange(e);
        setFieldTouched(field, true, false);
    }

    return (
        //use handleSubmit here
        <form onSubmit={e => {
            e.preventDefault();
            alert("Form submitted");
        }}
        >

            <TextField
                id="name"
                name="name"
                label="Name"
                helperText={touched.name ? errors.name : ""}
                error={touched.name && Boolean(errors.name)}
                value={name}
                onChange={change.bind(null, "name")}
                fullWidth

            />
            <TextField
                id="email"
                name="email"
                label="Email"
                helperText={touched.email ? errors.email : ""}
                error={touched.email && Boolean(errors.email)}
                value={email}
                onChange={change.bind(null, "email")}
                fullWidth

            />
            <TextField
                id="password"
                name="password"
                label="Password"
                helperText={touched.password ? errors.password : ""}
                error={touched.password && Boolean(errors.password)}
                value={password}
                onChange={change.bind(null, "password")}
                fullWidth
                type="password"

            />
            <TextField
                id="confirmPassword"
                name="confirmPassword"
                label="Confirm Password"
                helperText={touched.confirmPassword ? errors.confirmPassword : ""}
                error={touched.confirmPassword && Boolean(errors.confirmPassword)}
                value={confirmPassword}
                onChange={change.bind(null, "confirmPassword")}
                fullWidth
                type="password"

            />
            <Button
                type="submit"
                variant="contained"
                color="primary"
                disabled={!isValid}
            >
                Submit
            </Button>
        </form>
    );
}

