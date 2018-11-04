import React, { Component } from "react";
import { Formik } from "formik";
import { FormComponent } from "./FormComponent";
import { Grid } from "@material-ui/core";
import * as Yup from "yup";

/* A form made by using of Formik Yup and Material-ui */

class InputForm extends Component {

    render() {

        const validationSchema = Yup.object({
            name: Yup.string("Enter a name").required("Name is required"),
            email: Yup.string("Enter your email").email("Enter a valid email").required("Email is required"),
            password: Yup.string("").min(8, "Password must contain at least 8 characters").required("Password is required"),
            confirmPassword: Yup.string("Enter your password again").required("Confirm your password").oneOf([Yup.ref("password")], "Password doesn't match")
        })

        const values = { name: "", email: "", password: "", confirmPassword: "" }

        return (
            <Grid container justify="center" spacing={8} style={{ padding: 24 }} >
                <Grid item>
                    <h1>Login Form Example</h1>
                    <Formik
                        render={props => <FormComponent {...props} />}
                        initialValues={values}
                        validationSchema={validationSchema}
                    />
                </Grid>
            </Grid>
        );
    }
}


export default InputForm;