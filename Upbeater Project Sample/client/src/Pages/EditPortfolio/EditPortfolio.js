import React, { Component } from "react";
import { Button, TextField, Typography } from "@material-ui/core";

class EditPortfolio extends Component {
    render() {
        return (
            <div>

                <Typography
                    variant="h4"
                    spacing={8}
                    style={{ padding: 24 }}
                >
                    WELCOME TO UPBEATER!
                </Typography>

                <Typography
                    variant="body1"
                    align="left"
                    spacing={8}
                    style={{ padding: 24 }}
                >
                    Becoming an Upbeater means that you are one of a few talented students in your area that we have chosen to accept. Big congratulations for making it, we’re really looking forward to work with you!
                    Before we can start representing you towards projects we need to get your Upbeater portfolio up on www.upbeater.com/meet-the-upbeaters. Please fill out the info below:
                </Typography>

                {/* use handleSubmit here */}
                <form onSubmit={e => {
                    e.preventDefault();
                    alert("Form submitted");
                }}
                >

                    <TextField
                        id="fullName"
                        name="fullName"
                        label="Full name"
                        fullWidth

                    />
                    <TextField
                        id="study"
                        name="study"
                        label="What are you studying? What are you studying to become?"
                        fullWidth

                    />
                    <TextField
                        id="bio"
                        name="bio"
                        label="Who are you? (bio) Tell us about yourself; your background, passion & why you’re driven to do what you do. Max 250 words."
                        fullWidth

                    />
                    <TextField
                        id="skills"
                        name="skills"
                        label="What’s your top 3 skills? In % of your knowledge level, ex. songwriting 90%"
                        fullWidth

                    />
                    <TextField
                        id="otherSkills"
                        name="otherSkills"
                        label="Do you have other skills worth mentioning*? *that supports what you want to become, ex. software you’ve used, language, tools, processes, etc."
                        fullWidth

                    />
                    <TextField
                        id="quote"
                        name="quote"
                        label="Do you have a quote you live by?"
                        fullWidth

                    />
                    <TextField
                        id="picture"
                        name="picture"
                        label="Profile picture Black & white"
                        fullWidth

                    />
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                    >
                        Submit
                    </Button>
                </form>
            </div>
        )
    }
}

export default EditPortfolio;