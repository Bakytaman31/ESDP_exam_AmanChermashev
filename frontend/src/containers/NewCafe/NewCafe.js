import React, {Component} from 'react';
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import {postCafe} from "../../store/actions/cafesActions";
import FormElement from "../../components/UI/Form/FormElement";
import Alert from "@material-ui/lab/Alert";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import {connect} from "react-redux";

class NewCafe extends Component {
    state = {
        title: '',
        description: '',
        image: '',
        checkbox: false
    };

    inputChangeHandler = e => {
        this.setState({[e.target.name]: e.target.value});
    };

    fileChangeHandler = e => {
        this.setState({[e.target.name]: e.target.files[0]});
    };

    submitFormHandler = event => {
        event.preventDefault();

        const formData = new FormData();

        Object.keys(this.state).forEach(key => {
            let value = this.state[key];

            formData.append(key, value);
        });

        this.props.postCafe(formData);
    };

    render() {
        return (
            <form onSubmit={this.submitFormHandler}>
                {this.props.error && (
                    <Grid item xs>
                        <Alert severity="error">{this.props.error}</Alert>
                    </Grid>
                )}
                <Box pt={2} pb={2}>
                    <Typography variant="h4">New Cafe</Typography>
                </Box>
                <Grid container direction="column" spacing={2}>
                    <Grid item xs>
                        <FormElement
                            type="text"
                            propertyName="title" required
                            title="Title"
                            onChange={this.inputChangeHandler}
                            value={this.state.title}
                        />
                    </Grid>
                    <Grid item xs>
                        <FormElement
                            type="file"
                            propertyName="image"
                            title="Image"
                            onChange={this.fileChangeHandler}
                        />
                    </Grid>
                    <Grid item xs>
                        <FormElement
                            type="textarea"
                            propertyName="description"
                            title="Description"
                            onChange={this.inputChangeHandler}
                            value={this.state.description}
                        />
                    </Grid>
                    <Grid item xs>
                        <p>By submitting this form, you agree that the following information will be published.</p>
                        <label htmlFor="checkbox">I agree</label>
                        <input
                            id="checkbox"
                            type="checkbox"
                            required
                            onClick={() => this.setState({checkbox: !this.state.checkbox})}
                        />
                    </Grid>
                    <Grid item xs>
                        <Button
                            type="submit"
                            color="primary"
                            variant="contained"
                            disabled={!this.state.checkbox}
                        >
                            Save
                        </Button>
                    </Grid>
                </Grid>
            </form>
        );
    }
}

const mapStateToProps = state => ({
    error: state.cafes.postError,
});

const mapDispatchToProps = dispatch => ({
    postCafe: cafe => dispatch(postCafe(cafe))
});

export default connect(mapStateToProps, mapDispatchToProps)(NewCafe);