import React, {Component} from 'react';
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import {FaStar} from "react-icons/all";
import {nanoid} from 'nanoid';

import './Rate.css';
import Divider from "@material-ui/core/Divider";
import {postRate} from "../../store/actions/ratesActions";
import {connect} from "react-redux";
import FormElement from "../UI/Form/FormElement";


class Rate extends Component {
    state = {
        food: 0,
        service: 0,
        interior: 0,
        text: ''
    };

    changeHandler = (event, newValue) => {
      this.setState({[event.target.name]: newValue})
    };

    inputChangeHandler = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    };

    postRate = () => {
      const rate = {...this.state};
      this.props.postRate(rate, this.props.cafeId);
    };

    render() {
        return (
            <>
                <Divider/>
                <Box pt={2} pb={2}>
                    <Typography variant="h3">Your rate</Typography>
                </Box>
                <Box component="fieldset" mb={3} borderColor="transparent">
                    <Typography component="legend">Quality of food</Typography>
                    {[...Array(5)].map((star, i) => {
                        const ratingValue = i + 1;
                        return (
                            <label key={nanoid()}>
                                <input
                                    type="radio"
                                    name="food"
                                    value={this.state.food}
                                    onClick={event => this.changeHandler(event, ratingValue)}
                                />
                                <FaStar
                                    size={50}
                                    className="star"
                                    color={ratingValue <= this.state.food ? "#ffc107" : "#e4e5e9"}
                                />
                            </label>
                        )
                    })}
                </Box>
                <Box component="fieldset" mb={3} borderColor="transparent">
                    <Typography component="legend">Service quality</Typography>
                    {[...Array(5)].map((star, i) => {
                        const ratingValue = i + 1;
                        return (
                            <label key={nanoid()}>
                                <input
                                    type="radio"
                                    name="service"
                                    value={this.state.service}
                                    onClick={event => this.changeHandler(event, ratingValue)}
                                />
                                <FaStar
                                    size={50}
                                    className="star"
                                    color={ratingValue <= this.state.service ? "#ffc107" : "#e4e5e9"}
                                />
                            </label>
                        )
                    })}
                </Box>
                <Box component="fieldset" mb={3} borderColor="transparent">
                    <Typography component="legend">Interior</Typography>
                    {[...Array(5)].map((star, i) => {
                        const ratingValue = i + 1;
                        return (
                            <label key={nanoid()}>
                                <input
                                    type="radio"
                                    name="interior"
                                    value={this.state.interior}
                                    onClick={event => this.changeHandler(event, ratingValue)}
                                />
                                <FaStar
                                    size={50}
                                    className="star"
                                    color={ratingValue <= this.state.interior ? "#ffc107" : "#e4e5e9"}
                                />
                            </label>
                        )
                    })}
                </Box>
                <Box component="fieldset" mb={3} borderColor="transparent">
                    <FormElement
                        propertyName="text"
                        title="Your comment"
                        value={this.state.text}
                        onChange={this.inputChangeHandler}
                    />
                </Box>
                <Box component="fieldset" mb={3} borderColor="transparent">
                    <Button color="primary" variant="contained" onClick={this.postRate}>Submit</Button>
                </Box>
            </>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    postRate: (rate, id) => dispatch(postRate(rate, id))
});

export default connect(null, mapDispatchToProps)(Rate);